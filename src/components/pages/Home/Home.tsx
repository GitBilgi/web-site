'use client'

import { SocialSection } from '../components/SocialSection'
import { DadosSection } from '../components/SectionDados'
import { ContainerHome } from './components/ContainerHome'
import { FeatureSection } from './components/ContainerFeatures'
import { ContainerMaps } from './components/ContainerMaps'

export function HomePage() {
  return (
    <>
      <ContainerHome />

      <SocialSection />

      <FeatureSection />

      <DadosSection />

      <ContainerMaps />
    </>
  )
}
