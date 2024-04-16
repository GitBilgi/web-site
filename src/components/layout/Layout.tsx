'use client'
import { ReactNode } from 'react'

import * as S from './Layout.style'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
