'use client'

import { motion } from 'framer-motion'
import { Smartphone, Upload, Code, Play } from 'lucide-react'

const clientProcessSteps = [
  {
    icon: Smartphone,
    title: 'Connexion application',
    description: 'Connectez-vous à l\'application dédiée pour gérer votre Film LED en toute simplicité.',
  },
  {
    icon: Upload,
    title: 'Importation des fichiers',
    description: 'Importez vos contenus (images, vidéos, animations) directement depuis votre appareil.',
  },
  {
    icon: Code,
    title: 'Programmation',
    description: 'Configurez vos séquences, horaires et paramètres d\'affichage selon vos besoins.',
  },
  {
    icon: Play,
    title: 'Lancement instantané ou différé',
    description: 'Lancez votre contenu immédiatement ou programmez-le pour une diffusion ultérieure.',
  },
]

export default function FilmLedClientProcess() {
  return (
    <section className="section-padding bg-gradient-tech">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
            <span className="gradient-text-film-led">Processus client</span>
          </h2>
          <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
            Gestion simple et intuitive de votre Film LED via l'application dédiée
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {clientProcessSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Ligne de connexion (desktop only) */}
              {index < clientProcessSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-tech-blue/50 to-transparent z-0 -translate-y-1/2" />
              )}

              <div className="relative card-film-led group text-center h-full flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-h2 font-display font-bold text-tech-blue opacity-50">
                    0{index + 1}
                  </div>
                  <div className="p-3 bg-tech-blue/10 rounded-xl group-hover:bg-tech-blue/20 transition-colors">
                    <step.icon className="w-7 h-7 text-tech-blue" />
                  </div>
                </div>
                <h3 className="text-h3 font-display font-semibold text-gray-light mb-3">{step.title}</h3>
                <p className="text-body-sm text-gray-text leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

