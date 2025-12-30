'use client'

import { motion } from 'framer-motion'
import { Power, PowerOff } from 'lucide-react'
import { content } from '@/lib/content'

export default function SmartfilmExplanation() {
  return (
    <section className="section-padding bg-primary-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">{content.smartfilm.explanation.title}</span>
          </h2>
          
          <p className="text-lg text-accent-gray mb-12 text-center leading-relaxed">
            {content.smartfilm.explanation.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mode Transparent ON */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-light rounded-xl p-8 border border-neon-green/30"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-neon-green/20 rounded-lg">
                  <Power className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {content.smartfilm.explanation.onOff.on.title}
                </h3>
              </div>
              <p className="text-accent-gray">
                {content.smartfilm.explanation.onOff.on.description}
              </p>
            </motion.div>

            {/* Mode Opaque OFF */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-light rounded-xl p-8 border border-primary-light"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-accent-dark/50 rounded-lg">
                  <PowerOff className="w-6 h-6 text-accent-gray" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {content.smartfilm.explanation.onOff.off.title}
                </h3>
              </div>
              <p className="text-accent-gray">
                {content.smartfilm.explanation.onOff.off.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

