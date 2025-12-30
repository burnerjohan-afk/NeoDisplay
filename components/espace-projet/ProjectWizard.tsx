'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Upload, Image as ImageIcon, Download, Check } from 'lucide-react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

export type ProjectData = {
  solutionType: 'film-led' | 'smartfilm' | 'both' | null
  spaceType: string
  dimensions: string
  image: File | null
  imagePreview: string | null
  intensity: number
  color: string
  transparency: number
  opacity: number
  generatedImage: string | null
}

const initialData: ProjectData = {
  solutionType: null,
  spaceType: '',
  dimensions: '',
  image: null,
  imagePreview: null,
  intensity: 50,
  color: '#00d4ff',
  transparency: 50,
  opacity: 50,
  generatedImage: null,
}

export default function ProjectWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<ProjectData>(initialData)
  const [isGenerating, setIsGenerating] = useState(false)

  const updateData = (updates: Partial<ProjectData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.solutionType !== null && data.spaceType !== '' && data.dimensions !== ''
      case 2:
        return data.image !== null
      case 3:
        return true
      case 4:
        return data.generatedImage !== null
      default:
        return false
    }
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const formData = new FormData()
      if (data.image) {
        formData.append('image', data.image)
      }
      formData.append('solutionType', data.solutionType || '')
      formData.append('spaceType', data.spaceType || '')

      const response = await fetch('/api/generate-visual', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        updateData({ generatedImage: result.imageUrl })
        nextStep()
      } else {
        console.error('Erreur lors de la génération')
        // En cas d'erreur, on simule une image pour la démo
        updateData({ generatedImage: data.imagePreview || '' })
        nextStep()
      }
    } catch (error) {
      console.error('Erreur:', error)
      // Simulation pour la démo
      updateData({ generatedImage: data.imagePreview || '' })
      nextStep()
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep
                      ? 'bg-neon-blue text-primary-dark'
                      : 'bg-primary-light text-accent-gray'
                  }`}
                >
                  {step < currentStep ? <Check className="w-5 h-5" /> : step}
                </div>
                <span className="text-xs mt-2 text-accent-gray">
                  {step === 1 && 'Projet'}
                  {step === 2 && 'Image'}
                  {step === 3 && 'Paramètres'}
                  {step === 4 && 'Résultat'}
                </span>
              </div>
              {step < 4 && (
                <div
                  className={`h-0.5 flex-1 mx-2 ${
                    step < currentStep ? 'bg-neon-blue' : 'bg-primary-light'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="bg-primary-light rounded-2xl p-8 border border-primary-light">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <Step1 key="step1" data={data} updateData={updateData} />
          )}
          {currentStep === 2 && (
            <Step2 key="step2" data={data} updateData={updateData} />
          )}
          {currentStep === 3 && (
            <Step3
              key="step3"
              data={data}
              updateData={updateData}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          )}
          {currentStep === 4 && (
            <Step4 key="step4" data={data} />
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-primary-light">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-6 py-3 border border-primary-light rounded-lg text-accent-gray hover:text-white hover:border-neon-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>

          {currentStep < 3 && (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center space-x-2 px-6 py-3 bg-neon-blue text-primary-dark font-semibold rounded-lg hover:bg-neon-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Suivant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

