'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Eye, Clock, DollarSign, Sparkles, Shield, Leaf } from 'lucide-react'
import Image from 'next/image'

const clientAdvantages = [
  {
    icon: TrendingUp,
    title: 'Augmentation du trafic',
    description: 'Attirez plus de clients avec un affichage dynamique et captivant qui se démarque de la concurrence.',
  },
  {
    icon: Eye,
    title: 'Visibilité maximale',
    description: 'Soyez visible même en plein jour grâce à une luminosité optimale et un contraste exceptionnel.',
  },
  {
    icon: Clock,
    title: 'Mise à jour en temps réel',
    description: 'Modifiez vos contenus instantanément depuis votre application, sans intervention technique.',
  },
  {
    icon: DollarSign,
    title: 'ROI mesurable',
    description: 'Investissement rentable avec un retour sur investissement rapide grâce à l\'augmentation des ventes.',
  },
  {
    icon: Sparkles,
    title: 'Image de marque renforcée',
    description: 'Projetez une image moderne, technologique et premium qui valorise votre entreprise.',
  },
  {
    icon: Shield,
    title: 'Solution durable',
    description: 'Technologie fiable et durable avec une longue durée de vie et une maintenance minimale.',
  },
  {
    icon: Leaf,
    title: 'Aspect environnemental',
    description: 'Technologie LED éco-énergétique réduisant votre consommation électrique et votre empreinte carbone. Solution durable avec matériaux recyclables.',
  },
]

export default function FilmLedClientAdvantages() {
  return (
    <section className="relative section-padding bg-gradient-tech overflow-hidden">
      {/* Image de fond sur toute la largeur */}
      <div className="absolute inset-0">
        <Image
          src="/images/imagefond2.png"
          alt="Film LED - Avantages client"
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
            <span className="gradient-text-film-led">Avantages client</span>
          </h2>
          <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
            Découvrez les bénéfices concrets de la technologie Film LED pour votre entreprise
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientAdvantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-film-led group"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 group-hover:bg-tech-blue/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-tech-blue" />
                    </div>
                  </div>
                  <h3 className="text-h3 font-display font-semibold text-gray-light mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-body-sm text-gray-text leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

