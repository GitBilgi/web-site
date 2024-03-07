'use client'
import { Heading } from '@/components/core/Typography/Heading'
import * as S from './EstrategicContent.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { Icon } from '@/components/core/Icon'
import { CheckIcon } from '@heroicons/react/24/solid'

export function ContainerEstrategic() {
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
          <Button button_size="xxl" styles="primary">
            Agendar Chamada
          </Button>
          <Button button_size="xxl" styles="secondary">
            Explorar
          </Button>
        </div>
        <div className="extra">
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">Dashboard personalizados</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">Dashboard personalizados</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">Dashboard personalizados</Paragraph>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="content-image">....</div>
      </div>
    </S.ProcessosHome>
  )
}
