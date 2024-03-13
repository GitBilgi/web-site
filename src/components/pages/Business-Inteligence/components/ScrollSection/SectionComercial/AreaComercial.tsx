'use client'

import { Heading } from '@/components/core/Typography/Heading'
import * as S from './AreaComercial.Style'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Icon } from '@/components/core/Icon'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'

export function SectionArea() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.AreaSection>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon
              IconRender={CurrencyDollarIcon}
              size="lg"
              className="icon-customise"
            />
          </div>
          <div className="heading">
            <Heading size="md">Área Comercial</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">Desvendando Seu Potencial de Vendas</Paragraph>
          </div>
        </div>
        <div className="content2">
          <div className="textarea">
            <Icon
              IconRender={CheckCircleIcon}
              size="md"
              mode="primary"
              className="size"
            />
            <Paragraph size="lg" className="paragraph">
              Tenha total controle sobre suas vendas.
            </Paragraph>
          </div>
          <div className="content-text">
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <Paragraph size="lg" className="paragraph">
                Acompanhe a quantidade de vendas, prospecções, taxa de conversão
                e faça comparações mensais e anuais.
              </Paragraph>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <Paragraph size="lg" className="paragraph">
                Identifique quais produtos são os mais vendidos e os mais
                lucrativos.
              </Paragraph>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />

              <Paragraph size="lg" className="paragraph">
                Conheça profundamente seus clientes. Saiba o que compram, quanto
                compram e suas opiniões sobre seus produtos.
              </Paragraph>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />
              <Paragraph size="lg" className="paragraph">
                Explore análises de lucro por regiões, apresentadas de maneira
                visual através de mapas.
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
    </S.AreaSection>
  )
}
