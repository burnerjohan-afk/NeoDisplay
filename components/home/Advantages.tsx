'use client'

import { motion } from 'framer-motion'
import { Award, Wrench, Shield, Users } from 'lucide-react'
import { content } from '@/lib/content'

const icons = {
  expertise: Award,
  installation: Wrench,
  sav: Shield,
  accompaniment: Users,
}

export default function Advantages() {
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
            {content.advantages.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.advantages.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Award
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-premium"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-tech-blue/10 rounded-xl border border-tech-blue/20 group-hover:border-tech-blue/40 transition-colors">
                    <Icon className="w-6 h-6 text-tech-blue" />
                  </div>
                </div>
                <h3 className="text-h3 font-display font-semibold text-gray-light mb-4">{item.title}</h3>
                <p className="text-body-sm text-gray-medium leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

