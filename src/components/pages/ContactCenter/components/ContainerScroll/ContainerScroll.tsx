import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { ChargeSection } from '../ContainerCobrança'
import { Atualization } from '../ContainerAtualization'
import { Atendimento } from '../ContainerAtendimento'

import * as S from './ContainerScroll.Style'
import { Support } from '../ContainerSupport'

export function ContainerScroll() {
  const { isMobile } = useDeviceDetection()

  return (
    <>
      {isMobile ? (
        <>
          <Support />

          <ChargeSection />

          <Atualization />

          <Atendimento />
        </>
      ) : (
        <S.ContainerScroll>
          <S.TextContainer>
            <Support />

            <ChargeSection />

            <Atualization />

            <Atendimento />
          </S.TextContainer>

          <S.ImageContainer />
        </S.ContainerScroll>
      )}
    </>
  )
}
