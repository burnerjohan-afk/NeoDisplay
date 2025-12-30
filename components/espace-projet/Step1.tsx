'use client'

import { motion } from 'framer-motion'
import { Zap, Eye, Layers } from 'lucide-react'
import { ProjectData } from './ProjectWizard'

type Step1Props = {
  data: ProjectData
  updateData: (updates: Partial<ProjectData>) => void
}

export default function Step1({ data, updateData }: Step1Props) {
  const solutionTypes = [
    { value: 'film-led', label: 'Film LED', icon: Zap, colorClass: 'border-neon-blue bg-neon-blue/10', iconColorClass: 'text-neon-blue' },
    { value: 'smartfilm', label: 'Smartfilm', icon: Eye, colorClass: 'border-neon-green bg-neon-green/10', iconColorClass: 'text-neon-green' },
    { value: 'both', label: 'Les deux', icon: Layers, colorClass: 'border-neon-purple bg-neon-purple/10', iconColorClass: 'text-neon-purple' },
  ]

  const spaceTypes = [
    'Vitrine commerce',
    'Bureau',
    'Salle de réunion',
    'Hôtel',
    'Maison',
    'Autre',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Type de solution</h2>
        <p className="text-accent-gray mb-6">Choisissez la solution qui vous intéresse</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {solutionTypes.map((type) => {
            const Icon = type.icon
            const isSelected = data.solutionType === type.value
            return (
              <button
                key={type.value}
                onClick={() => updateData({ solutionType: type.value as any })}
                className={`p-6 rounded-lg border-2 transition-all ${
                  isSelected
                    ? type.colorClass
                    : 'border-primary-light hover:border-primary-light/50'
                }`}
              >
                <Icon className={`w-8 h-8 mb-3 mx-auto ${isSelected ? type.iconColorClass : 'text-accent-gray'}`} />
                <div className={`font-semibold ${isSelected ? 'text-white' : 'text-accent-gray'}`}>
                  {type.label}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Type d'espace</h2>
        <p className="text-accent-gray mb-4">Sélectionnez le type d'espace concerné</p>
        <select
          value={data.spaceType}
          onChange={(e) => updateData({ spaceType: e.target.value })}
          className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white focus:outline-none focus:border-neon-blue"
        >
          <option value="">Sélectionnez un type d'espace</option>
          {spaceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Dimensions approximatives</h2>
        <p className="text-accent-gray mb-4">Indiquez les dimensions de votre espace</p>
        <input
          type="text"
          value={data.dimensions}
          onChange={(e) => updateData({ dimensions: e.target.value })}
          placeholder="Ex: 3m x 2m"
          className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white placeholder-accent-dark focus:outline-none focus:border-neon-blue"
        />
      </div>
    </motion.div>
  )
}

