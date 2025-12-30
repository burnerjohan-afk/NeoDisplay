'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Sparkles, Rocket, Palette } from 'lucide-react'
import { content } from '@/lib/content'

const benefitIcons = [TrendingUp, Sparkles, Rocket, Palette]

export default function FilmLedBenefits() {
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
            <span className="gradient-text-film-led">{content.filmLed.benefits.title}</span>
          </h2>
          <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
            Découvrez les avantages qui font la différence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.filmLed.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-film-led group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 group-hover:bg-tech-blue/20 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-8 h-8 text-tech-blue" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-display font-semibold text-gray-light mb-3">{benefit.title}</h3>
                    <p className="text-body-sm text-gray-text leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

