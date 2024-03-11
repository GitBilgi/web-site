'use client'
import { Icon } from '@/components/core/Icon'
import * as S from './Atendimento.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

export function Atendimento() {
  const { isMobile } = useDeviceDetection()

  return (
    <S.ContainerAtendimento>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon
              IconRender={UserGroupIcon}
              size="lg"
              className="icon-customise"
            />
          </div>
          <div className="heading">
            <Heading size="md">Atendimento Integrado e Venda Passiva</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              Somos a melhor porta de entrada para seu cliente.
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
                Facilitamos a jornada do seu cliente. Do suporte ao comercial,
                fornecemos dados sobre planos, cadastros e ordens de serviço,
                deixando tudo pronto para a instalação.
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
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )}
    </S.ContainerAtendimento>
  )
}
