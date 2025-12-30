'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { ProjectData } from './ProjectWizard'

type Step4Props = {
  data: ProjectData
}

export default function Step4({ data }: Step4Props) {
  const [showBefore, setShowBefore] = useState(false)

  const handleDownload = () => {
    if (data.generatedImage) {
      const link = document.createElement('a')
      link.href = data.generatedImage
      link.download = 'simulation-film-led-smartfilm.jpg'
      link.click()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-green/20 rounded-full mb-4">
          <Check className="w-8 h-8 text-neon-green" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Simulation générée avec succès !
        </h2>
        <p className="text-accent-gray">
          Visualisez le résultat avant/après de votre projet
        </p>
      </div>

      <div className="relative">
        <div className="relative aspect-video bg-primary-dark rounded-lg overflow-hidden border border-primary-light">
          {data.generatedImage && (
            <Image
              src={data.generatedImage}
              alt="Simulation générée"
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Slider pour comparer avant/après */}
        {data.imagePreview && data.generatedImage && (
          <div className="mt-4">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setShowBefore(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  !showBefore
                    ? 'bg-neon-blue text-primary-dark'
                    : 'bg-primary-light text-accent-gray'
                }`}
              >
                Après
              </button>
              <button
                onClick={() => setShowBefore(true)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  showBefore
                    ? 'bg-neon-blue text-primary-dark'
                    : 'bg-primary-light text-accent-gray'
                }`}
              >
                Avant
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-6 py-3 border border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue/10 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Télécharger la simulation</span>
        </button>
        <Link
          href={`/contact?solution=${data.solutionType}`}
          className="flex items-center space-x-2 px-6 py-3 bg-neon-blue text-primary-dark font-semibold rounded-lg hover:bg-neon-green transition-colors"
        >
          <span>Demander un devis</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  )
}

