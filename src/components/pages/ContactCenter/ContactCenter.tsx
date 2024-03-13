'use client'

import { CarouselSupport } from '../components/CarouselAvaliation'
import { ConsultingSection } from '../components/ConsulteSection'
import { FaqSection } from '../components/FaqSection'
import { SocialSection } from '../components/SocialSection'
import { ContactHome } from './components/ContactHome/ContactHome'
import { Atendimento } from './components/ContainerAtendimento'
import { Atualization } from './components/ContainerAtualization'
import { ChargeSection } from './components/ContainerCobrança'
import { ContentRecurso } from './components/ContainerRecursos'
import { Support } from './components/ContainerSupport'
import { Service } from './components/Serviços'

export function ContactCenterPage() {
  return (
    <>
      <ContactHome />

      <SocialSection />

      <ContentRecurso />

      <Service />

      <Support />

      <ChargeSection />

      <Atualization />

      <Atendimento />

      <CarouselSupport />

      <FaqSection />

      <ConsultingSection />
    </>
  )
}
