'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { content } from '@/lib/content'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  solutionType: z.enum(['film-led', 'smartfilm', 'both', '']),
  spaceType: z.string().min(1, 'Veuillez sélectionner un type d\'espace'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter le traitement de vos données',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      solutionType: (searchParams?.get('solution') as any) || '',
      consent: false,
    },
  })

  useEffect(() => {
    const solution = searchParams?.get('solution')
    if (solution) {
      setValue('solutionType', solution as any)
    }
  }, [searchParams, setValue])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Ici, vous intégrerez votre backend/CRM (Odoo, HubSpot, Make, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Réinitialiser le formulaire après succès
        setTimeout(() => {
          window.location.href = '/contact'
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const solutionTypes = [
    { value: 'film-led', label: 'Film LED' },
    { value: 'smartfilm', label: 'Smartfilm Opacifiant' },
    { value: 'both', label: 'Les deux' },
    { value: '', label: 'Non déterminé' },
  ]

  const spaceTypes = [
    'Vitrine commerce',
    'Bureau',
    'Salle de réunion',
    'Hôtel',
    'Maison',
    'Autre',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary-light rounded-2xl p-8 border border-primary-light"
    >
      {submitStatus === 'success' ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Message envoyé !</h2>
          <p className="text-accent-gray">{content.contact.form.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                {content.contact.form.name} *
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white placeholder-accent-dark focus:outline-none focus:border-neon-blue"
                placeholder="Jean Dupont"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                {content.contact.form.email} *
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white placeholder-accent-dark focus:outline-none focus:border-neon-blue"
                placeholder="jean.dupont@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                {content.contact.form.phone} *
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white placeholder-accent-dark focus:outline-none focus:border-neon-blue"
                placeholder="06 12 34 56 78"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                {content.contact.form.company}
              </label>
              <input
                {...register('company')}
                type="text"
                className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white placeholder-accent-dark focus:outline-none focus:border-neon-blue"
                placeholder="Nom de votre société"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                {content.contact.form.solutionType} *
              </label>
              <select
                {...register('solutionType')}
                className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white focus:outline-none focus:border-neon-blue"
              >
                {solutionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.solutionType && (
                <p className="text-red-400 text-sm mt-1">{errors.solutionType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                {content.contact.form.spaceType} *
              </label>
              <select
                {...register('spaceType')}
                className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white focus:outline-none focus:border-neon-blue"
              >
                <option value="">Sélectionnez un type d&apos;espace</option>
                {spaceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.spaceType && (
                <p className="text-red-400 text-sm mt-1">{errors.spaceType.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              {content.contact.form.message} *
            </label>
            <textarea
              {...register('message')}
              rows={6}
              className="w-full px-4 py-3 bg-primary-dark border border-primary-light rounded-lg text-white placeholder-accent-dark focus:outline-none focus:border-neon-blue resize-none"
              placeholder="Décrivez votre projet..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-3">
            <input
              {...register('consent')}
              type="checkbox"
              id="consent"
              className="mt-1 w-4 h-4 text-neon-blue bg-primary-dark border-primary-light rounded focus:ring-neon-blue"
            />
            <label htmlFor="consent" className="text-sm text-accent-gray">
              J&apos;accepte que mes données personnelles soient traitées conformément à la{' '}
              <a href="/politique-confidentialite" className="text-neon-blue hover:underline">
                politique de confidentialité
              </a>
              . *
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-400 text-sm">{errors.consent.message}</p>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <p>{content.contact.form.error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-neon-blue text-primary-dark font-semibold rounded-lg hover:bg-neon-green transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? 'Envoi en cours...' : content.contact.form.submit}</span>
          </button>
        </form>
      )}
    </motion.div>
  )
}

