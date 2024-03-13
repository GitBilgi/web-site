'use client'
import { ReactNode } from 'react'
import { Header } from './Header'
// import { Footer } from './Footer'

import * as S from './Layout.style'
import { Footer } from './Footer'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <S.Container>
      <Header />

      {children}

      <Footer />
    </S.Container>
  )
}
