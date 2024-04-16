'use client'

import { SocialSection } from '../components/SocialSection'
import { DadosSection } from '../components/SectionDados'
import { ContainerHome } from './components/ContainerHome'
import { FeatureSection } from './components/ContainerFeatures'
import { ContainerMaps } from './components/ContainerMaps'
// import { CarouselSupport } from '../components/CarouselAvaliation'
import { FaqSectionHome } from '../components/FaqSections/FaqSectionHome'
import { ConsultingSection } from '../components/ConsulteSection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function HomePage() {
  return (
    <>
      <Header />

      <ContainerHome />

      <SocialSection />

      <FeatureSection />

      <DadosSection />

      <ContainerMaps />

      {/* <CarouselSupport /> */}

      <FaqSectionHome />

      <ConsultingSection />

      <Footer />
    </>
  )
}
