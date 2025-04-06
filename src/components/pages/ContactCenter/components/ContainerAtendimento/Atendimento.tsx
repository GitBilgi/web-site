'use client'
import { Icon } from '@/components/core/Icon'
import * as S from './Atendimento.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/outline'
// import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { useRouter } from 'next/navigation'

export function Atendimento() {
  // const { isMobile } = useDeviceDetection()

  const router = useRouter()

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
            <Heading size="md">
              Integração Inteligente: Como o KOD Transforma a Gestão Financeira
              e Contábil
            </Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              KOD: A Integração que Simplifica, Automação que Impulsiona.
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
                A integração do KOD ao ERP e à gestão contábil proporciona uma
                automação completa de processos financeiros, garantindo maior
                precisão e eficiência. Com dados centralizados e atualizados em
                tempo real, a empresa ganha visibilidade total sobre seu fluxo
                de caixa, contas a pagar e a receber, além de facilitar a
                conformidade fiscal. O KOD reduz erros manuais, acelera a tomada
                de decisões e otimiza o tempo da equipe, resultando em um
                controle mais ágil, transparente e livre de complicações.
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
    </S.ContainerAtendimento>
  )
}
