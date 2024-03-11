'use client'

import { Heading } from '@/components/core/Typography/Heading'
import * as S from './Relacionamento.Style'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Icon } from '@/components/core/Icon'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { Button } from '@/components/core/Buttons/Button'

export function SectionRelacionamento() {
  const { isMobile } = useDeviceDetection()
  return (
    <S.RelacionamentoSection>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon IconRender={HeartIcon} size="lg" className="icon-customise" />
          </div>
          <div className="heading">
            <Heading size="md">Relacionamento</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              Fortaleça os Laços com seus Clientes
            </Paragraph>
          </div>
        </div>
        <div className="content2">
          <div className="content-text">
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <Paragraph size="md" className="paragraph">
                Acompanhe o Backlog de Tickets, Taxa de Abandono e Taxa de
                Retenção para aprimorar o atendimento.
              </Paragraph>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <Paragraph size="md" className="paragraph">
                Integre informações com o suporte para entender quantas vezes um
                cliente solicitou assistência e por quê.
              </Paragraph>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <Paragraph size="md" className="paragraph">
                Meça o NPS, Customer Satisfaction Score (CSAT) e Customer Effort
                Score para avaliar a satisfação do cliente.
              </Paragraph>
            </div>
          </div>
          <div className="button">
            <Button button_size="xxl" styles="primary">
              Agendar Chamada
            </Button>
          </div>
        </div>
      </div>

      {!isMobile ? (
        <div className="container2">
          <div className="content-image">....</div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image">....</div>
        </div>
      )}
    </S.RelacionamentoSection>
  )
}
