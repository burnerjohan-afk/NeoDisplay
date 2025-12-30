'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Settings, CheckCircle } from 'lucide-react'
import { content } from '@/lib/content'

const stepIcons = [Search, FileText, Settings, CheckCircle]

export default function Process() {
  return (
    <section className="section-padding bg-gradient-tech">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
            {content.process.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.process.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line (desktop only) */}
                {index < content.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-tech-blue/50 to-transparent z-0" style={{ width: 'calc(100% - 4rem)' }} />
                )}

                <div className="relative card-premium group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl font-display font-semibold text-tech-blue/40">
                      {step.number}
                    </div>
                    <div className="p-3 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 transition-colors">
                      <Icon className="w-6 h-6 text-tech-blue" />
                    </div>
                  </div>
                  <h3 className="text-h3 font-display font-semibold text-gray-light mb-4">{step.title}</h3>
                  <p className="text-body-sm text-gray-medium leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

