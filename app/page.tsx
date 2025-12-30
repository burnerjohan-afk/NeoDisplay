import Hero from '@/components/home/Hero'
import Solutions from '@/components/home/Solutions'
import Advantages from '@/components/home/Advantages'
import Process from '@/components/home/Process'
import { generateMetadata as generateHomeMetadata } from '@/lib/metadata'

export const metadata = generateHomeMetadata({
  title: 'Accueil',
  description: 'Solutions premium de film LED et smartfilm opacifiant. Expertise technique, installation professionnelle et accompagnement de A à Z.',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Advantages />
      <Process />
    </>
  )
}

