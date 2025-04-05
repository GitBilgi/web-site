'use client'
import { Heading } from '@/components/core/Typography/Heading'
import * as S from './ContainerHome.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import Image from 'next/image'

import Jira from '@/images/jira.png'
import LogoIOB from '@/images/LogoIOB.png'
import LogoIxc from '@/images/LogoIXC.png'
import GDrive from '@/images/g-drive.png'
import logosci from '@/images/logosci'

import Background from '@/images/background.png'
import BackgroundMobile from '@/images/BackgroundRight.png'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { useRouter } from 'next/navigation'

export function ContainerHome() {
  const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.Container>
      <div className="container">
        <div className="content">
          <Heading size="xxs" className="subtitle">
            Conectando você ao que importa
          </Heading>
          <Heading size="lg">Inteligência para Crescimento Estratégico</Heading>
          <Paragraph size="md">
            Descomplicamos a gestão para garantir resultados consistentes e
            previsíveis em cada aspecto crucial do seu negócio.
          </Paragraph>
        </div>
        <div className="buttons">
          <Button
            button_size="xxl"
            styles="primary"
            onClick={() => router.push('/form')}
          >
            Agendar Chamada
          </Button>
          {/* <Button button_size="xxl" styles="secondary">
            Explorar
          </Button> */}
        </div>
        <div className="integrations">
          <Paragraph size="sm">Integrações Inteligentes</Paragraph>
          <div className="apps">
            <Image src={LogoIxc} alt="Logo IXC" className="logoIXC" />
            <Image src={LogoIOB} alt="Logo Stack" className="logoIOB" />
            <Image src={GDrive} alt="Logo Google Drive" />
            <Image src={Jira} alt="Logo Jira" />
            <Image srv={logosci} alt="Logo SCI" />
          </div>
        </div>
        {!isMobile ? (
          <div className="image-background">
            <Image
              src={Background}
              alt="Imagem de Fundo HomePage"
              className="image"
            />
          </div>
        ) : (
          <div className="image-background-mobile">
            <Image src={BackgroundMobile} alt="Imagem de Fundo HomePage" />
          </div>
        )}
      </div>
    </S.Container>
  )
}
