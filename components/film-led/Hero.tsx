'use client'

import { motion } from 'framer-motion'
import { Zap, Sparkles } from 'lucide-react'
import { content } from '@/lib/content'

export default function FilmLedHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Vidéo en arrière-plan sur toute la largeur */}
      <div className="absolute inset-0">
        <video
          src="/video/filmled-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-110"
        />
        {/* Overlay sombre réduit pour plus de luminosité */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-graphite/50 to-graphite/60" />
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
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-light/50 backdrop-blur-sm rounded-full mb-8 border border-neon-blue/20"
            >
              <Zap className="w-4 h-4 text-neon-blue" />
              <span className="text-sm text-neon-blue font-medium">
                Film LED
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{content.filmLed.hero.title}</span>
            </h1>

            <p className="text-xl md:text-2xl text-accent-gray">
              {content.filmLed.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

