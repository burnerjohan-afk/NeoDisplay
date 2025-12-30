'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image-accueil.jpg"
          alt="Accueil NeoDisplay"
          fill
          className="object-cover brightness-110"
          priority
          unoptimized
        />
        {/* Overlay sombre pour la lisibilité - réduit pour plus de luminosité */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/60 to-graphite/70" />
      </div>

      {/* Grid pattern subtil par-dessus */}
      <div className="absolute inset-0 opacity-[0.03] z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(47, 143, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(47, 143, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge premium */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 glass border-tech-blue/30 rounded-full mb-12"
            >
              <span className="text-caption text-tech-blue font-medium">
                Solutions High-Tech Premium
              </span>
            </motion.div>

            {/* Titre principal */}
            <h1 className="text-h1 md:text-[56px] lg:text-[64px] font-display font-semibold mb-8 leading-[1.1]">
              <span className="gradient-text">{content.hero.title}</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-body md:text-[20px] text-gray-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-body-sm text-gray-text mb-16 max-w-2xl mx-auto">
              {content.hero.description}
            </p>

            {/* CTA Boutons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="group btn-primary inline-flex items-center space-x-3"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#solutions"
                className="btn-secondary inline-flex items-center space-x-3"
              >
                <span>{content.hero.ctaSecondary}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator minimaliste */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border border-tech-blue/30 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-tech-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

