'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function SmartfilmCTA() {
  return (
    <section className="section-padding bg-primary-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-primary-dark rounded-2xl p-12 border border-neon-green/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Prêt à transformer votre espace ?</span>
          </h2>
          <p className="text-accent-gray text-lg mb-8">
            Obtenez un devis personnalisé pour votre projet Smartfilm
          </p>
          <Link
            href="/contact?solution=smartfilm"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-neon-green text-primary-dark font-semibold rounded-lg hover:bg-neon-blue transition-all glow-effect"
          >
            <span>Demander un devis Smartfilm</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

