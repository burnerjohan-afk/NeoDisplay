'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { ProjectData } from './ProjectWizard'

type Step3Props = {
  data: ProjectData
  updateData: (updates: Partial<ProjectData>) => void
  onGenerate: () => void
  isGenerating: boolean
}

export default function Step3({ data, updateData, onGenerate, isGenerating }: Step3Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Génération de la simulation</h2>
        <p className="text-accent-gray mb-6">
          Cliquez sur le bouton ci-dessous pour générer la prévisualisation de votre projet avec l'IA
        </p>
      </div>

      <div className="bg-primary-dark rounded-lg p-6 border border-primary-light">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-accent-gray">Solution sélectionnée :</span>
            <span className="text-white font-semibold">
              {data.solutionType === 'film-led' && 'Film LED'}
              {data.solutionType === 'smartfilm' && 'Smartfilm Opacifiant'}
              {data.solutionType === 'both' && 'Film LED + Smartfilm'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-accent-gray">Type d'espace :</span>
            <span className="text-white font-semibold">{data.spaceType || 'Non spécifié'}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={isGenerating}
        className="w-full px-8 py-4 bg-neon-blue text-primary-dark font-semibold rounded-lg hover:bg-neon-green transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Sparkles className="w-5 h-5 animate-spin" />
            <span>Génération en cours... Cela peut prendre quelques instants</span>
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            <span>Générer la prévisualisation IA</span>
          </>
        )}
      </button>
    </motion.div>
  )
}

