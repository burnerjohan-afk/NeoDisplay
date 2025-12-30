'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Zap, Palette, Monitor, Settings } from 'lucide-react'
import { content } from '@/lib/content'

const features = [
  {
    icon: Sparkles,
    title: 'Haute luminosité',
    description: 'Visibilité optimale même en plein jour pour un impact visuel maximal',
  },
  {
    icon: Palette,
    title: 'Personnalisation totale',
    description: 'Designs sur mesure adaptés à votre identité de marque et vos besoins',
  },
  {
    icon: Monitor,
    title: 'Contenu dynamique',
    description: 'Affichage de textes, animations et visuels pour une communication efficace',
  },
  {
    icon: Zap,
    title: 'Faible consommation',
    description: 'Technologie LED éco-responsable avec une consommation énergétique optimisée',
  },
  {
    icon: Settings,
    title: 'Installation professionnelle',
    description: 'Pose par nos experts certifiés garantissant un résultat parfait',
  },
  {
    icon: CheckCircle2,
    title: 'Maintenance simplifiée',
    description: 'Solution durable avec un support technique réactif et une maintenance facilitée',
  },
]

export default function FilmLedFeatures() {
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
            <span className="gradient-text-film-led">Caractéristiques techniques</span>
          </h2>
          <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
            Une technologie de pointe pour des résultats exceptionnels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-film-led group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 group-hover:bg-tech-blue/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-tech-blue" />
                  </div>
                </div>
                <h3 className="text-h3 font-display font-semibold text-gray-light mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-gray-text leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

