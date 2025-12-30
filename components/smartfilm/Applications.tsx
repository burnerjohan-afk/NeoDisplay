'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Building, Stethoscope, Hotel, Home, Droplet, Users, Heart } from 'lucide-react'
import { content } from '@/lib/content'
import { createSmartfilmSlug } from '@/lib/smartfilm-applications'

const applicationIcons = [Building, Stethoscope, Hotel, Home, Droplet, Users, Heart]

// Mapping des images pour chaque application
const applicationImages: { [key: string]: string } = {
  'Bureaux & salles de réunion': '/images/salle de reunion.png',
  'Cabinets médicaux': '/images/centremedical.png',
  'Hôtels': '/images/hotel.png',
  'Maisons haut de gamme': '/images/maison.png',
  'Salles de bain vitrées': '/images/salledebain.png',
  'Espaces de coworking': '/images/coworking.jpg',
  'Hôpital / EHPAD': '/images/hopital.jpg',
}

export default function SmartfilmApplications() {
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
            <span className="gradient-text-smartfilm">{content.smartfilm.applications.title}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.smartfilm.applications.items.map((application, index) => {
            const Icon = applicationIcons[index] || Building
            const imageSrc = applicationImages[application]
            const slug = createSmartfilmSlug(application)
            return (
              <Link
                key={index}
                href={`/smartfilm/applications/${slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-smartfilm group overflow-hidden cursor-pointer h-full hover:border-smartfilm-turquoise/50 transition-all duration-300"
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
                      {/* Overlay avec gradient smartfilm-turquoise */}
                      <div className="absolute inset-0 bg-gradient-to-t from-smartfilm-turquoise/40 via-smartfilm-turquoise/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  
                  {/* Contenu avec icône et titre */}
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-smartfilm-turquoise/10 rounded-xl border border-smartfilm-turquoise/20 group-hover:border-smartfilm-turquoise/40 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-smartfilm-turquoise" />
                    </div>
                    <h3 className="text-body font-display font-semibold text-gray-light group-hover:text-smartfilm-turquoise transition-colors">{application}</h3>
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

