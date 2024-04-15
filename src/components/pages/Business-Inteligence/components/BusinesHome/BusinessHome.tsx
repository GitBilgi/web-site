'use client'

import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import {
  ContainerHome,
  ImageContainer,
  ImageContainer2
} from './BusinessHome.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { Icon } from '@/components/core/Icon'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

export function BusinessHome() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <ContainerHome>
      <div className="container1">
        <div className="content">
          <Heading size="xxs" className="subtitle">
            Business Intelligence
          </Heading>
          <Heading size="lg" className="title">
            Explore o BI mais completo do mercado
          </Heading>
          <Paragraph size="md" className="paragraph">
            Soluções para todas as áreas da sua empresa, com insights totalmente
            personalizados
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
            <Paragraph size="sm">Dashboard personalizados</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">Integração em tempo real</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">Transforme Insights em impacto</Paragraph>
          </div>
        </div>
      </div>
      {!isMobile ? (
        <div className="container2">
          <ImageContainer />
        </div>
      ) : (
        <div className="container2-mobile">
          <ImageContainer2 />
        </div>
      )}
    </ContainerHome>
  )
}
