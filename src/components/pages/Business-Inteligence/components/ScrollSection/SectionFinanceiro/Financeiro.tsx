'use client'

import { Heading } from '@/components/core/Typography/Heading'
import * as S from './Financeiro.Style'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import { Icon } from '@/components/core/Icon'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'

export function FinanceiroSection() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.SectionFinanceiro>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon
              IconRender={ArrowTrendingUpIcon}
              size="lg"
              className="icon-customise"
            />
          </div>
          <div className="heading">
            <Heading size="md">Área Financeira</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              Impulsionando Seu Negócio e Fortalecendo Vínculos com Clientes
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
                Aprimore o relacionamento com seus clientes ao fortalecer as
                finanças da sua empresa.
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
                Descubra métricas importantes, como rentabilidade, ROI, ROA,
                Margem Bruta, Margem Líquida e Margem EBITDA.
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
                Explore indicadores de liquidez, como Liquidez Recorrente e
                Liquidez Geral, para entender melhor a saúde financeira.
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
                Gerencie de forma estratégica o endividamento, utilizando
                métricas como Índice de Endividamento.
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
                Geral, PCT, Composição do Endividamento (CE) e IPL.
              </Paragraph>
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
    </S.SectionFinanceiro>
  )
}
