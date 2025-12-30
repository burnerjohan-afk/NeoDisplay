'use client'

import { motion } from 'framer-motion'
import { FileText, Calculator, Wrench, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Analyse de votre projet',
    description: 'Étude de vos besoins et analyse technique de vos espaces pour définir la solution optimale',
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Devis personnalisé',
    description: 'Dimensionnement précis et devis détaillé adapté à vos contraintes et votre budget',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installation professionnelle',
    description: 'Pose par nos équipes certifiées dans les délais convenus avec un suivi rigoureux',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Mise en service & suivi',
    description: 'Formation, mise en service et accompagnement post-installation pour garantir votre satisfaction',
  },
]

export default function FilmLedProcess() {
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
            <span className="gradient-text-film-led">Notre processus</span>
          </h2>
          <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
            Un accompagnement de A à Z pour votre projet Film LED
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Ligne de connexion (desktop seulement) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-tech-blue to-transparent z-0" style={{ width: 'calc(100% - 4rem)' }} />
                )}

                <div className="relative card-film-led group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-h2 font-display font-bold text-tech-blue opacity-50">
                      {step.number}
                    </div>
                    <div className="p-3 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 group-hover:bg-tech-blue/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-tech-blue" />
                    </div>
                  </div>
                  <h3 className="text-h3 font-display font-semibold text-gray-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-gray-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

