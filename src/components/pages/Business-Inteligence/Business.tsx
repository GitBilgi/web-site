'use client'

import { DadosSection } from '../components/SectionDados'
import { SocialSection } from '../components/SocialSection'
import { BusinessHome } from './components/BusinesHome/BusinessHome'
import { Recursos } from './components/RecursoContainer'

export function Business() {
  return (
    <>
      <BusinessHome />

      <SocialSection />

      <Recursos />

      <DadosSection />
    </>
  )
}
