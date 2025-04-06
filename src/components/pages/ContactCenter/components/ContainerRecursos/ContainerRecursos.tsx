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
            Aplicamos tecnologia para facilitar as integrações contábeis
          </Heading>
          <Paragraph size="md" className="paragraph">
            Nosso atendimento de ponta a ponta.
          </Paragraph>
        </div>
        <div className="container-cards">
          <div className="cards">
            <Icon IconRender={HeartIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">
                Suporte e Atendimento Contábil Humanizado
              </Heading>
              <Paragraph size="md">
                Tratamos seu negócio com a atenção que ele merece, oferecendo
                suporte contábil em horários comerciais e alternativos, sempre
                com a preocupação de entender suas necessidades de forma única.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={UserPlusIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Recuperação de Crédito Tributário</Heading>
              <Paragraph size="md">
                Recuperamos créditos tributários, revertendo cancelamentos e
                ajustando débitos com precisão e uma estratégia eficaz.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={CheckBadgeIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Atualização de Planos Descomplicada</Heading>
              <Paragraph size="md">
                Adequamos seus planos para SCM e SVA, tornando as ofertas mais
                atrativas para seus clientes antigos e otimizando o suporte
                diário de forma simplificada.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={SparklesIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Atendimento Totalmente Personalizado</Heading>
              <Paragraph size="md">
                Somos uma das poucas contabilidades que oferece atendimento
                presencial, adaptando cada interação às necessidades individuais
                e proporcionando uma experiência única e satisfatória para todas
                as empresas. cliente.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </S.RecursoContainer>
  )
}
