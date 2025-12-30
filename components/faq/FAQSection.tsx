'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus } from 'lucide-react'
import { FAQCategory, faqData, getAllFAQCategories, getFAQByCategory } from '@/lib/faq'

type FAQSectionProps = {
  categories?: string[] // IDs des catégories à afficher (si undefined, affiche tout)
  showCategories?: boolean // Afficher les onglets de catégories
}

export default function FAQSection({ categories, showCategories = true }: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories?.[0] || faqData[0].id)
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({})

  // Filtrer les catégories selon le prop
  const displayedCategories = categories 
    ? getFAQByCategory(categories)
    : getAllFAQCategories()

  // Trouver la catégorie sélectionnée
  const currentCategory = displayedCategories.find(cat => cat.id === selectedCategory) || displayedCategories[0]

  const toggleItem = (itemIndex: number) => {
    setOpenItems(prev => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory] === itemIndex ? null : itemIndex
    }))
  }

  return (
    <section className="section-padding bg-gradient-tech">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 md:text-[56px] font-display font-semibold mb-6 text-gray-light">
              Questions Fréquentes
            </h2>
            <p className="text-body-lg text-gray-medium max-w-2xl mx-auto">
              Trouvez les réponses à vos questions sur le Film LED et le Smartfilm opacifiant
            </p>
          </motion.div>

          {/* Navigation par catégories (onglets) */}
          {showCategories && displayedCategories.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-4 border-b border-gray-medium/20 pb-4">
                {displayedCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setOpenItems(prev => ({ ...prev, [category.id]: null }))
                    }}
                    className={`relative px-6 py-3 rounded-lg font-medium text-body-sm transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'text-tech-blue bg-tech-blue/10'
                        : 'text-gray-medium hover:text-gray-light hover:bg-gray-dark/50'
                    }`}
                    aria-pressed={selectedCategory === category.id}
                    role="tab"
                  >
                    {category.title}
                    {selectedCategory === category.id && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-tech-blue"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Questions/Réponses de la catégorie sélectionnée */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {currentCategory?.items.map((item, index) => {
              const isOpen = openItems[selectedCategory] === index
              const itemId = `${selectedCategory}-${index}`

              return (
                <motion.div
                  key={itemId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card-premium border-gray-medium/20 hover:border-tech-blue/40 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${itemId}`}
                    id={`faq-question-${itemId}`}
                  >
                    <span className="text-body font-display font-semibold text-gray-light pr-8 group-hover:text-tech-blue transition-colors" dangerouslySetInnerHTML={{ __html: item.question }} />
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-dark/50 group-hover:bg-tech-blue/10 transition-colors">
                      {isOpen ? (
                        <ChevronDown className="w-5 h-5 text-tech-blue rotate-180 transition-transform" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-medium group-hover:text-tech-blue transition-colors" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        id={`faq-answer-${itemId}`}
                        role="region"
                        aria-labelledby={`faq-question-${itemId}`}
                      >
                        <div className="px-6 pb-5 pt-2 text-body-base text-gray-text leading-relaxed border-t border-gray-medium/10" dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Message si pas de questions */}
          {currentCategory && currentCategory.items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-gray-medium">
                Aucune question disponible pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

