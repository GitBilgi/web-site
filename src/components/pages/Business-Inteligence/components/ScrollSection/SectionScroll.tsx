'use client'

import { SectionArea } from './SectionComercial'
import { FinanceiroSection } from './SectionFinanceiro'
import { SectionRelacionamento } from './SectionRelacionamento'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

import * as S from './SectionScroll.Style'

export function Scroll() {
  const { isMobile } = useDeviceDetection()

  return (
    <>
      {isMobile ? (
        <>
          <SectionArea />

          <FinanceiroSection />

          <SectionRelacionamento />
        </>
      ) : (
        <S.ContainerScroll>
          <S.TextContainer>
            <SectionArea />

            <FinanceiroSection />

            <SectionRelacionamento />
          </S.TextContainer>

          <S.ImageContainer />
        </S.ContainerScroll>
      )}
    </>
  )
}
