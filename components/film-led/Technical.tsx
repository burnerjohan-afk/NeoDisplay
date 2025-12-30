'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function FilmLedTechnical() {
  return (
    <section className="relative section-padding bg-gradient-tech overflow-hidden">
      {/* Image de fond sur toute la largeur */}
      <div className="absolute inset-0">
        <Image
          src="/images/imagefond2.png"
          alt="Film LED - Caractéristiques techniques"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/60 to-graphite/80" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
            <span className="gradient-text-film-led">{content.filmLed.technical.title}</span>
          </h2>
          <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
            Des spécifications techniques de pointe pour des performances optimales
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.filmLed.technical.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-film-led group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-caption text-tech-blue font-semibold mb-3 uppercase tracking-wider">{item.label}</div>
                <div className="text-h3 font-display font-semibold text-gray-light">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

