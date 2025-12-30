'use client'

import { motion } from 'framer-motion'
import { Eye, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function SmartfilmHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Image en arrière-plan sur toute la largeur */}
      <div className="absolute inset-0">
        <Image
          src="/images/smartfilm-avantaprès.jpg"
          alt="Smartfilm avant/après - Transformation transparent/opaque"
          fill
          className="object-contain"
          priority
          unoptimized
        />
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/70 to-graphite/80" />
      </div>
      
      {/* Texte superposé sur l'image */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-light/50 backdrop-blur-sm rounded-full mb-8 border border-neon-green/20"
            >
              <Eye className="w-4 h-4 text-neon-green" />
              <span className="text-sm text-neon-green font-medium">
                Smartfilm Opacifiant
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-blue">
                {content.smartfilm.hero.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-accent-gray">
              {content.smartfilm.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

