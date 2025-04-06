'use client'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

import * as S from './ContactHome.Style'

import { Icon } from '@/components/core/Icon'
import { useRouter } from 'next/navigation'

export function ContactHome() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerHome>
      <div className="container1">
        <div className="content">
          <Heading size="xxs" className="subtitle">
            Contabilidade
          </Heading>
          <Heading size="lg" className="title">
            Priorizamos o atendimento personalizado
          </Heading>
          <Paragraph size="md" className="paragraph">
            Sua Gestão Contábil Real Time
          </Paragraph>
        </div>
        <div className="buttons">
          <Button
            button_size="xxl"
            styles="primary"
            className="button"
            onClick={() => router.push('/form')}
          >
            Agendar Chamada
          </Button>
          {/* <Button button_size="xxl" styles="secondary" className="button">
            Explorar
          </Button> */}
        </div>
        <div className="extra">
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">“Otimização Tributária”</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">“Recuperação de crédito tributário”</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">“Totalmente Personalizado”</Paragraph>
          </div>
        </div>
      </div>
      {!isMobile ? (
        <div className="container2">
          <S.Image />
        </div>
      ) : (
        <div className="container2-mobile">
          <S.Image2 />
        </div>
      )}
    </S.ContainerHome>
  )
}
