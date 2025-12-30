'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FilmLedCTA() {
  return (
    <section className="section-padding bg-gradient-tech">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center card-film-led p-12 md:p-16 border-tech-blue/30"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-h1 md:text-[48px] font-display font-semibold mb-6 text-gray-light">
              <span className="gradient-text-film-led">Prêt à transformer votre espace ?</span>
            </h2>
            <p className="text-body-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Obtenez un devis personnalisé pour votre projet Film LED et découvrez comment créer un impact visuel exceptionnel
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?solution=film-led"
                className="group btn-primary inline-flex items-center space-x-3"
              >
                <span>Demander un devis Film LED</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
