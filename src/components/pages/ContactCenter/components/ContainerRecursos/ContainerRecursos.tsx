'use client'

import { Icon } from '@/components/core/Icon'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import {
  CheckBadgeIcon,
  HeartIcon,
  SparklesIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline'

import * as S from './ContainerRecursos.Style'

export function ContentRecurso() {
  return (
    <S.RecursoContainer>
      <div className="container">
        <div className="recursos">
          <Heading size="xs" className="heading">
            Recursos
          </Heading>
          <Heading size="lg" className="size">
            Enxergamos os clientes de nossos clientes como pessoas
          </Heading>
          <Paragraph size="md" className="paragraph">
            Buscamos recuperação de clientes com atendimento de ponta a ponta.
          </Paragraph>
        </div>
        <div className="container-cards">
          <div className="cards">
            <Icon IconRender={HeartIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Suporte e Atendimento Humanizado</Heading>
              <Paragraph size="md">
                Atendemos seu cliente como uma pessoa, não apenas um número, com
                suporte 24/7, em horário comercial e alternativo.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={UserPlusIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Recuperação e Reversão Financeira</Heading>
              <Paragraph size="md">
                Recuperamos valores, revertendo cancelamentos e ajustando
                débitos com precisão e eficácia estratégica.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={CheckBadgeIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Atualização de Planos Descomplicada</Heading>
              <Paragraph size="md">
                Simplificamos upgrades, tornando ofertas atrativas para seus
                clientes antigos e otimizando o suporte diário.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={SparklesIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Atendimento Totalmente Personalizado</Heading>
              <Paragraph size="md">
                Cada interação é adaptada às necessidades individuais,
                proporcionando uma experiência única e satisfatória para o
                cliente.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </S.RecursoContainer>
  )
}
