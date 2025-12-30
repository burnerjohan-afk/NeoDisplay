'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BeforeAfterImage() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-full h-full"
      >
        <Image
          src="/images/smartfilm-avantaprès.jpg"
          alt="Smartfilm avant/après - Transformation transparent/opaque"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Overlay léger pour améliorer la lisibilité si nécessaire */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/20 via-transparent to-graphite/20" />
      </motion.div>
    </section>
  )
}

