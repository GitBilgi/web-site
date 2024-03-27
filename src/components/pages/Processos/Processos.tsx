'use client'

import { SocialSection } from '../components/SocialSection'
import { RecursosContent } from './components/ContainerRecursos'
import { ContainerEstrategic } from './components/ContainerEstrategic'
import { Features } from './components/ContainerFeatures'
// import { CarouselSupport } from '../components/CarouselAvaliation'
import { ConsultingSection } from '../components/ConsulteSection'
import { FaqSectionProcessos } from '../components/FaqSections/FaqSectionProcessos'

export function ProcessosPage() {
  return (
    <>
      <ContainerEstrategic />

      <SocialSection />

      <RecursosContent />

      <Features />

      {/* <CarouselSupport /> */}

      <FaqSectionProcessos />

      <ConsultingSection />
    </>
  )
}
