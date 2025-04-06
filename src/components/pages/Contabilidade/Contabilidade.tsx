'use client'

import { Header } from '@/components/layout/Header'
// import { CarouselSupport } from '../components/CarouselAvaliation'
import { ConsultingSection } from '../components/ConsulteSection'
import { FaqSectionContact } from '../components/FaqSections/FaqSectionContact'
import { SocialSection } from '../components/SocialSection'
import { ContactHome } from './components/ContactHome/ContactHome'
import { Contabilidade } from './components/Contabilidade/Contabilidade'
// import { Atendimento } from './components/ContainerAtendimento'
// import { Atualization } from './components/ContainerAtualization'
// import { ChargeSection } from './components/ContainerCobrança'
import { ContentRecurso } from './components/ContainerRecursos'
import { ContainerScroll } from './components/ContainerScroll'
// import { Support } from './components/ContainerSupport'
import { Service } from './components/Serviços'
import { Footer } from '@/components/layout/Footer'

export function Contabilidade() {
  return (
    <>
      <Header />

      <ContactHome />

      <SocialSection />

      <ContentRecurso />

      <Service />

      {/* <Support /> */}

      {/* <ChargeSection />

      <Atualization />

      <Atendimento /> */}

      <ContainerScroll />

      {/* <CarouselSupport /> */}

      <FaqSectionContact />

      <ConsultingSection />

      <Footer />
    </>
  )
}
