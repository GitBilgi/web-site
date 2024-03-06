'use client'
import { ReactNode } from 'react'
import { Header } from './Header'
// import { Footer } from './Footer'

import * as S from './Layout.style'
import { FaqSection } from '../pages/components/FaqSection'
import { Footer } from './Footer'
import { ConsultingSection } from '../pages/components/ConsulteSection'
import { CarouselSupport } from '../pages/components/CarouselAvaliation'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <S.Container>
      <Header />

      {children}

      <CarouselSupport />

      <FaqSection />

      <ConsultingSection />

      <Footer />
    </S.Container>
  )
}
