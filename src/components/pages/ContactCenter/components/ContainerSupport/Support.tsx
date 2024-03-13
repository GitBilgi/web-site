'use client'

import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import * as S from './Support.Style'
import { Icon } from '@/components/core/Icon'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

export function Support() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerSupport>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon IconRender={HeartIcon} size="lg" className="icon-customise" />
          </div>
          <div className="heading">
            <Heading size="md">Suporte Nível 1 e 2, 24/7</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              De pessoas para pessoas. Seu cliente é muito que apenas um numero.
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
              <div className="content1">
                <Heading size="sm">Atendimento em Horário Comercial</Heading>
                <Paragraph size="md" className="paragraph">
                  Atendimento disponível durante as horas regulares de
                  funcionamento, proporcionando suporte nos períodos típicos de
                  expediente.
                </Paragraph>
              </div>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <div className="content1">
                <Heading size="sm">Atendimento Full Time</Heading>
                <Paragraph size="md" className="paragraph">
                  Atendimento contínuo e ininterrupto, 24 horas por dia, 7 dias
                  por semana, para suporte constante e acesso à equipe em tempo
                  integral.
                </Paragraph>
              </div>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <div className="content1">
                <Heading size="sm">
                  Atendimento em Horários Alternativos
                </Heading>
                <Paragraph size="md" className="paragraph">
                  Oferecemos suporte fora do horário comercial convencional,
                  incluindo noites, fins de semana e feriados, para atender às
                  necessidades flexíveis de nossos clientes.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="button">
            <Button
              button_size="xxl"
              styles="primary"
              onClick={() => router.push('/form')}
            >
              Agendar Chamada
            </Button>
          </div>
        </div>
      </div>

      {!isMobile ? (
        <div className="container2">
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )}
    </S.ContainerSupport>
  )
}
