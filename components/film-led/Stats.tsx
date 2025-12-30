'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Users, Award } from 'lucide-react'

const stats = [
  {
    value: '+500',
    label: 'Projets réalisés',
    icon: TrendingUp,
    color: 'text-tech-blue',
  },
  {
    value: '98%',
    label: 'Clients satisfaits',
    icon: Users,
    color: 'text-tech-blue',
  },
  {
    value: '24/7',
    label: 'Support technique',
    icon: Zap,
    color: 'text-tech-blue',
  },
  {
    value: '10+',
    label: 'Années d\'expérience',
    icon: Award,
    color: 'text-tech-blue',
  },
]

export default function FilmLedStats() {
  return (
    <section className="section-padding bg-gradient-tech border-y border-gray-medium/10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tech-blue/10 border border-tech-blue/20 mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-h1 md:text-[48px] font-display font-bold text-tech-blue mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-body-sm text-gray-medium font-medium">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

