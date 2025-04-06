'use client'

// import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import * as S from './Support.Style'
import { Icon } from '@/components/core/Icon'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

export function Support() {
  // const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerSupport>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon IconRender={HeartIcon} size="lg" className="icon-customise" />
          </div>
          <div className="heading">
            <Heading size="md">Consultoria Multidisciplinar</Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              Oferecemos consultoria especializada em diversas áreas, garantindo
              soluções completas e integradas para o crescimento e sucesso de
              sua empresa.
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
                <Heading size="sm">Atendimento Remoto</Heading>
                <Paragraph size="md" className="paragraph">
                  Oferecemos suporte ágil e eficiente de forma remota,
                  garantindo soluções rápidas e práticas para a sua empresa,
                  onde quer que você esteja.
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
                  Atendimento Presencial com Consultoria
                </Heading>
                <Paragraph size="md" className="paragraph">
                  Proporcionamos atendimento presencial acompanhado de
                  consultoria especializada, garantindo soluções personalizadas
                  e um acompanhamento mais próximo para o sucesso da sua
                  empresa.
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
                <Heading size="sm">Treinamentos Remotos e Presenciais</Heading>
                <Paragraph size="md" className="paragraph">
                  Oferecemos treinamentos personalizados, tanto remotos quanto
                  presenciais, para capacitar sua equipe com as melhores
                  práticas e soluções para o seu negócio.
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

      {/* {!isMobile ? (
        <div className="container2">
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )} */}
    </S.ContainerSupport>
  )
}
