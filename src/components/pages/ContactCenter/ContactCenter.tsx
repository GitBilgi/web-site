'use client'

import { CarouselSupport } from '../components/CarouselAvaliation'
import { ConsultingSection } from '../components/ConsulteSection'
import { FaqSectionContact } from '../components/FaqSectionContact'
import { SocialSection } from '../components/SocialSection'
import { ContactHome } from './components/ContactHome/ContactHome'
// import { Atendimento } from './components/ContainerAtendimento'
// import { Atualization } from './components/ContainerAtualization'
// import { ChargeSection } from './components/ContainerCobrança'
import { ContentRecurso } from './components/ContainerRecursos'
import { ContainerScroll } from './components/ContainerScroll'
// import { Support } from './components/ContainerSupport'
import { Service } from './components/Serviços'

export function ContactCenterPage() {
  return (
    <>
      <ContactHome />

      <SocialSection />

      <ContentRecurso />

      <Service />

      {/* <Support /> */}

      {/* <ChargeSection />

      <Atualization />

      <Atendimento /> */}

      <ContainerScroll />

      <CarouselSupport />

      <FaqSectionContact />

      <ConsultingSection />
    </>
  )
}
