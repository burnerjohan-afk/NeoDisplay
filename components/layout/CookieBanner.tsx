'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary-gray border-t border-primary-light p-6 shadow-2xl"
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <Cookie className="w-6 h-6 text-neon-blue flex-shrink-0 mt-1" />
                <div className="text-sm text-accent-gray">
                  <p className="mb-2">
                    Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic du site.
                  </p>
                  <p>
                    En continuant, vous acceptez notre{' '}
                    <Link
                      href="/politique-confidentialite"
                      className="text-neon-blue hover:text-neon-green underline"
                    >
                      politique de confidentialité
                    </Link>
                    {' '}et l&apos;utilisation de cookies.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm text-accent-gray hover:text-white transition-colors"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-neon-blue text-primary-dark font-semibold rounded-lg hover:bg-neon-green transition-colors"
                >
                  Accepter
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-accent-gray hover:text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

