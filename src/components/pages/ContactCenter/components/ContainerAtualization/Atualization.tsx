'use client'

import { Icon } from '@/components/core/Icon'
import * as S from './Atualization.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/core/Buttons/Button'
// import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { useRouter } from 'next/navigation'

export function Atualization() {
  // const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerAtualization>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon
              IconRender={CheckBadgeIcon}
              size="lg"
              className="icon-customise"
            />
          </div>
          <div className="heading">
            <Heading size="md">Atualização de Planos</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              A melhor forma de trazer seu cliente para o novo plano com baixo
              custo e alta eficiência.
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
                Conversamos com clientes usando planos antigos, trazendo ofertas
                que os fazem querer ficar
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
                Fazemos o upgrade de forma eficiente, otimizando o suporte no
                dia-a-dia e aumentando o ticket médio.
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
      {/* 
      {!isMobile ? (
        <div className="container2">
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )} */}
    </S.ContainerAtualization>
  )
}
