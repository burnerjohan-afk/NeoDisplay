'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Power } from 'lucide-react'
import Image from 'next/image'

export default function SmartfilmDemo() {
  const [isOpaque, setIsOpaque] = useState(false)

  const toggleOpacity = () => {
    setIsOpaque(!isOpaque)
  }

  return (
    <section className="section-padding bg-gradient-tech">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
              Découvrez l&apos;effet en direct
            </h2>
            <p className="text-body text-gray-medium max-w-2xl mx-auto">
              Cliquez sur le bouton de la télécommande pour voir la transformation instantanée
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Image de la salle de réunion */}
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-medium/20 bg-gray-dark">
                {/* Image transparente (smartfilm non activé) */}
                <AnimatePresence mode="wait">
                  {!isOpaque ? (
                    <motion.div
                      key="transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src="/images/smartfilm-demo-transparent.jpg" 
                        alt="Salle de réunion avec vitres transparentes" 
                        fill 
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="opaque"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src="/images/smartfilm-demo-opaque.jpg" 
                        alt="Salle de réunion avec vitres opacifiées" 
                        fill 
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Indicateur d'état */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-4 py-2 rounded-lg glass border ${
                    isOpaque 
                      ? 'border-smartfilm-turquoise/40 bg-smartfilm-turquoise/10' 
                      : 'border-smartfilm-turquoise/20 bg-smartfilm-turquoise/5'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        isOpaque ? 'bg-smartfilm-turquoise' : 'bg-smartfilm-turquoise/50'
                      }`}></div>
                      <span className="text-caption text-gray-light font-medium">
                        {isOpaque ? 'Opaque' : 'Transparent'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Télécommande */}
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Télécommande réaliste */}
                <div className="relative w-56 h-80 bg-gradient-to-b from-gray-dark via-gray-dark/95 to-gray-dark rounded-3xl p-5 border-2 border-gray-medium/40 shadow-2xl"
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Texture métallique */}
                  <div className="absolute inset-0 rounded-3xl opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)',
                  }}></div>

                  {/* Logo/Marque en haut */}
                  <div className="mb-4 text-center">
                    <div className="text-caption-sm text-gray-medium font-medium tracking-wider">
                      SMARTFILM
                    </div>
                  </div>

                  {/* Écran LCD avec rétroéclairage */}
                  <div className="mb-5">
                    <div className={`h-14 bg-gradient-to-b from-gray-dark to-black rounded-lg border-2 ${
                      isOpaque 
                        ? 'border-smartfilm-turquoise/40 shadow-[0_0_15px_rgba(34,227,213,0.3)]' 
                        : 'border-gray-medium/30'
                    } relative overflow-hidden`}
                      style={{
                        boxShadow: isOpaque 
                          ? 'inset 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(34, 227, 213, 0.3)' 
                          : 'inset 0 2px 10px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {/* Rétroéclairage LCD */}
                      <div className={`absolute inset-0 ${
                        isOpaque ? 'bg-smartfilm-turquoise/20' : 'bg-gray-medium/5'
                      }`}></div>
                      
                      {/* Texte LCD */}
                      <div className="relative h-full flex items-center justify-center">
                        <div className={`text-lg font-mono font-bold tracking-wider ${
                          isOpaque ? 'text-smartfilm-turquoise' : 'text-gray-medium'
                        }`} style={{
                          textShadow: isOpaque ? '0 0 10px rgba(34, 227, 213, 0.5)' : 'none',
                        }}>
                          {isOpaque ? 'OPAQUE' : 'CLEAR'}
                        </div>
                      </div>
                      
                      {/* Reflet LCD */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-lg"></div>
                    </div>
                  </div>

                  {/* Bouton principal - grand et proéminent */}
                  <button
                    onClick={toggleOpacity}
                    className={`w-full h-28 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group mb-4 ${
                      isOpaque
                        ? 'bg-gradient-to-b from-smartfilm-turquoise/30 to-smartfilm-turquoise/20 border-smartfilm-turquoise/60 shadow-[0_0_25px_rgba(34,227,213,0.4)]'
                        : 'bg-gradient-to-b from-gray-medium/20 to-gray-dark/40 border-gray-medium/40 hover:border-smartfilm-turquoise/40'
                    }`}
                    style={{
                      boxShadow: isOpaque 
                        ? 'inset 0 2px 10px rgba(0, 0, 0, 0.3), 0 0 25px rgba(34, 227, 213, 0.4), inset 0 -2px 0 rgba(255, 255, 255, 0.1)'
                        : 'inset 0 2px 10px rgba(0, 0, 0, 0.3), inset 0 -2px 0 rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {/* Texture du bouton */}
                    <div className="absolute inset-0 rounded-2xl opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
                    }}></div>

                    <motion.div
                      animate={{ scale: isOpaque ? [1, 1.05, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full flex items-center justify-center"
                    >
                      <Power 
                        className={`w-16 h-16 transition-all duration-300 ${
                          isOpaque ? 'text-smartfilm-turquoise' : 'text-gray-medium'
                        }`}
                        style={{
                          filter: isOpaque ? 'drop-shadow(0 0 8px rgba(34, 227, 213, 0.6))' : 'none',
                        }}
                      />
                    </motion.div>

                    {/* Effet de pression */}
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="absolute inset-0 bg-black/20 rounded-2xl"
                    />
                  </button>

                  {/* Boutons secondaires */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Bouton + */}
                    <button 
                      className="h-10 bg-gray-dark/50 border border-gray-medium/30 rounded-lg flex items-center justify-center hover:bg-gray-medium/20 transition-colors group"
                      style={{
                        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <span className="text-gray-light text-lg font-bold group-hover:text-smartfilm-turquoise transition-colors">+</span>
                    </button>
                    
                    {/* Bouton - */}
                    <button 
                      className="h-10 bg-gray-dark/50 border border-gray-medium/30 rounded-lg flex items-center justify-center hover:bg-gray-medium/20 transition-colors group"
                      style={{
                        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <span className="text-gray-light text-lg font-bold group-hover:text-smartfilm-turquoise transition-colors">−</span>
                    </button>
                  </div>

                  {/* Détails décoratifs */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                    <div className="w-1 h-1 bg-gray-medium/20 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-medium/20 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-medium/20 rounded-full"></div>
                  </div>
                </div>

                {/* Indicateur LED - placé en dessous de la télécommande */}
                <div className="flex items-center justify-center gap-2 mt-4 mb-4">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isOpaque ? 'bg-smartfilm-turquoise shadow-[0_0_10px_rgba(34,227,213,0.8)]' : 'bg-gray-medium/30'
                  }`}></div>
                  <span className="text-caption-sm text-gray-medium font-medium">
                    {isOpaque ? 'Actif' : 'Inactif'}
                  </span>
                </div>

                {/* Légende */}
                <div className="text-center lg:text-left max-w-[224px]">
                  <p className="text-body-sm text-gray-medium">
                    Contrôle instantané de l&apos;intimité avec une simple pression
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-body text-gray-medium max-w-3xl mx-auto">
              Le Smartfilm opacifiant transforme instantanément vos vitres en parois privatives. 
              Parfait pour les salles de réunion, bureaux et espaces nécessitant une confidentialité flexible.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

