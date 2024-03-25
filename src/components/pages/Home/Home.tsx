'use client'

import { SocialSection } from '../components/SocialSection'
import { DadosSection } from '../components/SectionDados'
import { ContainerHome } from './components/ContainerHome'
import { FeatureSection } from './components/ContainerFeatures'
import { ContainerMaps } from './components/ContainerMaps'
import { CarouselSupport } from '../components/CarouselAvaliation'
import { FaqSectionHome } from '../components/FaqSections/FaqSectionHome'
import { ConsultingSection } from '../components/ConsulteSection'

export function HomePage() {
  return (
    <>
      <ContainerHome />

      <SocialSection />

      <FeatureSection />

      <DadosSection />

      <ContainerMaps />

      <CarouselSupport />

      <FaqSectionHome />

      <ConsultingSection />
    </>
  )
}
