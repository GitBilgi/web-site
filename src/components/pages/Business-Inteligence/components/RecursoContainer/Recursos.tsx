import { Icon } from '@/components/core/Icon'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'

import * as S from './Recursos.Style'
import {
  ClockIcon,
  DocumentChartBarIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export function Recursos() {
  return (
    <S.ContainerRecursos>
      <div className="container">
        <div className="recursos">
          <Heading size="xs" className="heading">
            Recursos
          </Heading>
          <Heading size="lg" className="size">
            Transforme suas informações em ganhos com nosso Business Inteligence
          </Heading>
          <Paragraph size="md" className="paragraph">
            Descubra insights comuns para cada setor de maneira simples e
            amigável.
          </Paragraph>
        </div>
        <div className="container-cards">
          <div className="cards">
            <Icon IconRender={ClockIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">
                Análise Geral e Detalhada em Tempo Real
              </Heading>
              <Paragraph size="md">
                Tenha uma visão completa e detalhada das informações para
                decisões rápidas, inteligentes e fundamentadas.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={DocumentChartBarIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Implementação Rápida</Heading>
              <Paragraph size="md">
                Comece a usar em poucos dias, sem complicações.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={UserGroupIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Compartilhamento Descomplicado</Heading>
              <Paragraph size="md">
                Compartilhe informações de maneira rápida e fácil, adaptada às
                suas preferências.
              </Paragraph>
            </div>
          </div>
          <div className="cards">
            <Icon IconRender={SparklesIcon} size="sm"></Icon>

            <div className="text">
              <Heading size="sm">Total Personalização</Heading>
              <Paragraph size="md">
                Adapte tudo conforme suas necessidades e preferências.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </S.ContainerRecursos>
  )
}
