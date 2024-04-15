'use client'
import { Heading } from '@/components/core/Typography/Heading'
import * as S from './EstrategicContent.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { Icon } from '@/components/core/Icon'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { useRouter } from 'next/navigation'

export function ContainerEstrategic() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ProcessosHome>
      <div className="container1">
        <div className="content">
          <Heading size="xxs" className="subtitle">
            Gerenciamento Estratégico
          </Heading>
          <Heading size="lg" className="title">
            Deixamos tudo mais eficiente
          </Heading>
          <Paragraph size="md" className="paragraph">
            Transformamos seus processos em aliados para o sucesso.
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
            <Paragraph size="sm">Tomada de Decisões</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">Eficiência Operacional</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">
              Fortalecimento da Posição Competitiva
            </Paragraph>
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
    </S.ProcessosHome>
  )
}
