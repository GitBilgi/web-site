'use client'

import { SocialSection } from '../components/SocialSection'
import { RecursosContent } from './components/ContainerRecursos'
import { ContainerEstrategic } from './components/ContainerEstrategic'
import { Features } from './components/ContainerFeatures'

export function ProcessosPage() {
  return (
    <>
      <ContainerEstrategic />

      <SocialSection />

      <RecursosContent />

      <Features />
    </>
  )
}
