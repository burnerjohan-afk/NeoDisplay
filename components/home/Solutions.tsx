'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Eye, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { content } from '@/lib/content'

export default function Solutions() {
  const solutions = [
    {
      ...content.solutions.filmLed,
      href: '/film-led',
      icon: Zap,
      // Film LED - Bleu Tech Premium #2F8FFF
      colorClasses: {
        icon: 'text-tech-blue',
        bg: 'bg-tech-blue/10',
        text: 'text-tech-blue',
        border: 'border-tech-blue/20',
        hoverBorder: 'hover:border-tech-blue/40',
        gradient: 'from-tech-blue/10',
        card: 'card-film-led',
      },
    },
    {
      ...content.solutions.smartfilm,
      href: '/smartfilm',
      icon: Eye,
      // Smartfilm - Turquoise Glace #22E3D5
      colorClasses: {
        icon: 'text-smartfilm-turquoise',
        bg: 'bg-smartfilm-turquoise/10',
        text: 'text-smartfilm-turquoise',
        border: 'border-smartfilm-turquoise/20',
        hoverBorder: 'hover:border-smartfilm-turquoise/40',
        gradient: 'from-smartfilm-turquoise/10',
        card: 'card-smartfilm',
      },
    },
  ]

  return (
    <section id="solutions" className="section-padding bg-gradient-tech">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
            Nos Solutions
          </h2>
          <p className="text-body text-gray-medium max-w-2xl mx-auto">
            Deux technologies premium pour transformer vos espaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isFilmLed = solution.href === '/film-led'
            return (
              <motion.div
                key={solution.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative ${solution.colorClasses.card} overflow-hidden transition-all duration-300`}
              >
                {/* Image réelle */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={isFilmLed ? "/images/image-accueil.jpg" : "/images/smartfilm-demo-opaque.jpg"}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay coloré selon le produit */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isFilmLed 
                      ? 'from-tech-blue/30 via-tech-blue/10 to-transparent' 
                      : 'from-smartfilm-turquoise/30 via-smartfilm-turquoise/10 to-transparent'
                  } group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Icône au centre pour référence visuelle - seulement pour Film LED */}
                  {isFilmLed && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                      <Icon className={`w-24 h-24 ${solution.colorClasses.icon} drop-shadow-2xl`} />
                    </div>
                  )}
                </div>

                <div className="p-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 ${solution.colorClasses.bg} rounded-xl border ${solution.colorClasses.border}`}>
                      <Icon className={`w-8 h-8 ${solution.colorClasses.icon}`} />
                    </div>
                    <h3 className={`text-h2 font-display font-semibold ${
                      isFilmLed ? 'gradient-text-film-led' : 'gradient-text-smartfilm'
                    }`}>
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-body text-gray-medium mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-body-sm text-gray-light">
                        <span className={`${solution.colorClasses.text} mt-1 font-semibold`}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={solution.href}
                    className={`inline-flex items-center space-x-3 ${
                      isFilmLed ? 'btn-primary' : 'btn-smartfilm'
                    } group/link`}
                  >
                    <span>{solution.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover effect subtil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.colorClasses.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

