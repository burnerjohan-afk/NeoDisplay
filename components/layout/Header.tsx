'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap, Eye } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/film-led', label: 'Film LED', icon: Zap },
    { href: '/smartfilm', label: 'Smartfilm', icon: Eye },
    { href: '/espace-projet', label: 'Espace Projet (IA)', shortLabel: 'Projet IA' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-gray-medium/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo showText={true} size="md" className="hover:opacity-90 transition-opacity" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const Icon = link.icon
              const displayLabel = (link as any).shortLabel || link.label
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2 py-2 text-body-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive(link.href)
                      ? 'text-tech-blue'
                      : 'text-gray-medium hover:text-gray-light'
                  }`}
                >
                  {displayLabel}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-blue"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="btn-primary text-body-sm whitespace-nowrap"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-medium hover:text-gray-light transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-medium/20">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(link.href)
                          ? 'bg-gray-dark/50 text-tech-blue'
                          : 'text-gray-medium hover:bg-gray-dark/30 hover:text-gray-light'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {Icon && <Icon className="w-5 h-5" />}
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  )
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 btn-primary text-center"
                >
                  Devis gratuit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

