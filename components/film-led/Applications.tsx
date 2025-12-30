'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Store, Hotel, Plane, Pill, UtensilsCrossed, ShoppingBag, ShoppingCart, Film } from 'lucide-react'
import { content } from '@/lib/content'
import { createSlug } from '@/lib/applications'

const applicationIcons = [Store, Hotel, Plane, Pill, UtensilsCrossed, ShoppingBag, ShoppingCart, Film]

// Mapping des images pour chaque application
const applicationImages: { [key: string]: string } = {
  'Vitrines commerces': '/images/vitrinemagsin.png',
  'Hôtels et réception': '/images/hotelréception.png',
  'Aéroport / Gare': '/images/Aeroport.png',
  'Pharmacie / Parapharmacie': '/images/parapharmacie.png',
  'Restaurant / Bar': '/images/Bar.png',
  'Centre commercial': '/images/centrecommercial.png',
  'Galerie commerciale': '/images/Galleriecommercial.png',
  'Cinéma': '/images/cinéma.png',
}

export default function FilmLedApplications() {
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
            {content.filmLed.applications.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.filmLed.applications.items.map((application, index) => {
            const Icon = applicationIcons[index] || Store
            const imageSrc = applicationImages[application]
            const slug = createSlug(application)
            return (
              <Link
                key={index}
                href={`/film-led/applications/${slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-film-led group overflow-hidden cursor-pointer h-full hover:border-tech-blue/50 transition-all duration-300"
                >
                {/* Image de l'application */}
                {imageSrc && (
                  <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={imageSrc}
                      alt={application}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    {/* Overlay avec gradient tech-blue */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/40 via-tech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                
                {/* Contenu avec icône et titre */}
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-tech-blue" />
                  </div>
                  <h3 className="text-body font-display font-semibold text-gray-light group-hover:text-tech-blue transition-colors">{application}</h3>
                </div>
              </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

