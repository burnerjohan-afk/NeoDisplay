'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CheckCircle, TrendingUp, Sparkles } from 'lucide-react'
import type { ApplicationDetail } from '@/lib/applications'

type ApplicationDetailProps = {
  application: ApplicationDetail
}

export default function ApplicationDetailComponent({ application }: ApplicationDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={application.heroImage}
            alt={application.title}
            fill
            className="object-cover brightness-75"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/70 to-graphite/80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/film-led"
                className="inline-flex items-center space-x-2 text-gray-medium hover:text-tech-blue transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour à Film LED</span>
              </Link>

              <h1 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
                <span className="gradient-text-film-led">Film LED pour {application.title}</span>
              </h1>
              <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
                {application.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-tech">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 md:text-[48px] font-display font-semibold mb-6 text-gray-light">
              {application.benefits.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {application.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-film-led group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-tech-blue/10 rounded-lg group-hover:bg-tech-blue/20 transition-colors">
                      <CheckCircle className="w-6 h-6 text-tech-blue" />
                    </div>
                    <p className="text-body text-gray-light leading-relaxed">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-tech-blue/10 rounded-full mb-6 border border-tech-blue/20">
                <TrendingUp className="w-5 h-5 text-tech-blue" />
                <span className="text-tech-blue font-medium">{application.roi.title}</span>
              </div>
              <h2 className="text-h1 md:text-[48px] font-display font-semibold mb-6 text-gray-light">
                {application.roi.description}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {application.roi.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-film-led text-center"
                >
                  <p className="text-body-lg text-gray-light font-medium">{metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gradient-tech">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 md:text-[48px] font-display font-semibold mb-6 text-gray-light">
              {application.useCases.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {application.useCases.items.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-film-led group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-smartfilm-turquoise/10 rounded-lg group-hover:bg-smartfilm-turquoise/20 transition-colors">
                      <Sparkles className="w-6 h-6 text-smartfilm-turquoise" />
                    </div>
                    <p className="text-body text-gray-light leading-relaxed">{useCase}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center card-film-led p-12 border-tech-blue/30"
          >
            <h2 className="text-h1 md:text-[48px] font-display font-semibold mb-6 text-gray-light">
              <span className="gradient-text-film-led">Prêt à transformer votre {application.title.toLowerCase()} ?</span>
            </h2>
            <p className="text-body-lg text-gray-medium mb-10 max-w-2xl mx-auto">
              Obtenez un devis personnalisé et découvrez comment le Film LED peut booster votre activité
            </p>
            <Link
              href={`/contact?solution=film-led&application=${application.slug}`}
              className="group btn-primary inline-flex items-center space-x-3"
            >
              <span>{application.cta}</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

