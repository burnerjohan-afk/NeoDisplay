import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { content } from '@/lib/content'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-gray border-t border-primary-light">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo showText={true} size="lg" className="mb-4" />
            <p className="text-accent-gray text-sm mb-4">
              {content.company.tagline}
            </p>
            <div className="space-y-2 text-sm text-accent-gray">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-neon-blue" />
                <a href={`tel:${content.legal.phone}`} className="hover:text-neon-blue transition-colors">
                  {content.legal.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-neon-blue" />
                <a href={`mailto:${content.legal.email}`} className="hover:text-neon-blue transition-colors">
                  {content.legal.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-neon-blue mt-1" />
                <span>{content.legal.address}</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/film-led"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  Film LED
                </Link>
              </li>
              <li>
                <Link
                  href="/smartfilm"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  Smartfilm Opacifiant
                </Link>
              </li>
              <li>
                <Link
                  href="/espace-projet"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  Espace Projet (IA)
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-accent-gray hover:text-neon-blue transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Un projet ?</h3>
            <p className="text-accent-gray text-sm mb-4">
              Obtenez un devis personnalisé pour votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-neon-blue text-primary-dark font-semibold rounded-lg hover:bg-neon-green transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-light text-center text-sm text-accent-gray">
          <p>
            © {currentYear} {content.legal.companyName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

