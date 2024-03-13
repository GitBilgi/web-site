'use client'

import { CarouselSupport } from '../components/CarouselAvaliation'
import { ConsultingSection } from '../components/ConsulteSection'
import { Dados } from '../components/DadosSemDestaques'
import { FaqSection } from '../components/FaqSection'
import { SocialSection } from '../components/SocialSection'
import { BusinessHome } from './components/BusinesHome/BusinessHome'
import { Recursos } from './components/RecursoContainer'
import { SectionArea } from './components/ScrollSection/SectionComercial'
import { FinanceiroSection } from './components/ScrollSection/SectionFinanceiro'
import { SectionRelacionamento } from './components/ScrollSection/SectionRelacionamento'

export function Business() {
  return (
    <>
      <BusinessHome />

      <SocialSection />

      <Recursos />

      <Dados />

      <SectionArea />

      <FinanceiroSection />

      <SectionRelacionamento />

      <CarouselSupport />

      <FaqSection />

      <ConsultingSection />
    </>
  )
}
