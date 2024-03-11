'use client'

import { Heading } from '@/components/core/Typography/Heading'
import * as S from './Service.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'

export function Service() {
  return (
    <S.ContainerService>
      <div className="container">
        <div className="recursos">
          <Heading size="xs" className="heading">
            Recursos
          </Heading>
          <Heading size="lg" className="size">
            Atendimento personalizado para as necessidades da sua empresa
          </Heading>
          <Paragraph size="md" className="paragraph">
            Nosso atendimento de adapta para o seu contexto, ajudando sua
            empresa à alcançar seus objetivos
          </Paragraph>
        </div>
      </div>
    </S.ContainerService>
  )
}
