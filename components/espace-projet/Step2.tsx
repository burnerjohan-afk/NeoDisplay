'use client'

import { motion } from 'framer-motion'
import { Upload, X } from 'lucide-react'
import { ProjectData } from './ProjectWizard'
import { useRef } from 'react'
import Image from 'next/image'

type Step2Props = {
  data: ProjectData
  updateData: (updates: Partial<ProjectData>) => void
}

export default function Step2({ data, updateData }: Step2Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Le fichier est trop volumineux. Taille maximale : 10MB')
        return
      }
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        updateData({
          image: file,
          imagePreview: reader.result as string,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    updateData({ image: null, imagePreview: null })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Téléverser une photo</h2>
        <p className="text-accent-gray mb-6">
          Téléversez une photo de votre espace pour générer la simulation
        </p>

        {!data.imagePreview ? (
          <div className="border-2 border-dashed border-primary-light rounded-lg p-12 text-center hover:border-neon-blue transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center space-y-4"
            >
              <Upload className="w-12 h-12 text-neon-blue" />
              <div>
                <span className="text-neon-blue font-semibold">Cliquez pour téléverser</span>
                <span className="text-accent-gray block mt-2">
                  ou glissez-déposez votre image ici
                </span>
              </div>
              <span className="text-sm text-accent-dark">
                Formats acceptés : JPG, PNG, WEBP (max. 10MB)
              </span>
            </label>
          </div>
        ) : (
          <div className="relative">
            <Image
              src={data.imagePreview}
              alt="Aperçu"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg border border-primary-light"
            />
            <button
              onClick={handleRemove}
              className="absolute top-4 right-4 p-2 bg-primary-dark/80 rounded-full hover:bg-primary-dark transition-colors"
              aria-label="Supprimer l&apos;image"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
      </div>

      <div className="bg-primary-dark rounded-lg p-4 border border-primary-light">
        <p className="text-sm text-accent-gray">
          <strong className="text-white">RGPD :</strong> En téléversant cette image, vous acceptez
          qu&apos;elle soit traitée par notre système IA pour générer la simulation. L&apos;image sera
          supprimée après traitement. Vous pouvez demander la suppression à tout moment.
        </p>
      </div>
    </motion.div>
  )
}

