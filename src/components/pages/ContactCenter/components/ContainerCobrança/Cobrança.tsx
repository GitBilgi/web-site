'use client'
import { Icon } from '@/components/core/Icon'
import * as S from './Cobrança.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
// import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export function ChargeSection() {
  // const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerCharge>
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
            <Heading size="md">Cobrança Ativa</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              Trazendo de volta seu investimento para seu bolso.
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
                Entramos em contato com clientes em atraso, buscando recuperar
                valores pendentes e, em caso de cancelamento, o valor e
                equipamentos.
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
                Revertemos situações, trazendo clientes de volta à base com
                estratégias eficazes.
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
                Além de gerenciar a inadimplência atual, recuperamos valores
                retroativos de meses e anos anteriores, incluindo contratos
                cancelados com débitos.
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
                Realizamos cálculos precisos, considerando períodos
                proporcionais de débito, ajustando conforme informações reais,
                mesmo quando divergentes do sistema.
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

      {/* {!isMobile ? (
        <div className="container2">
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )} */}
    </S.ContainerCharge>
  )
}
