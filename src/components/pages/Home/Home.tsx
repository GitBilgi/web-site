'use client'

import Image from 'next/image'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import * as S from './Home.style'

import Notion from '@/images/notion.png'
import Stack from '@/images/slack.png'
import GDrive from '@/images/g-drive.png'
import Jira from '@/images/jira.png'
import Background from '@/images/background.png'
import Layers from '@/images/Layers.png'
import Sisyphus from '@/images/Sisyphus.png'
import Circooles from '@/images/Circooles.png'
import Catalog from '@/images/Catalog.png'
import Quotient from '@/images/Quotient.png'
import Hourglass from '@/images/Hourglass.png'
import { Subtitle } from '@/components/core/Typography/Subtitle'

export function HomePage() {
  return (
    <>
      <S.Container>
        <div className="image-background">
          <Image src={Background} alt="Imagem de Fundo HomePage" />
        </div>
        <div className="container">
          <div className="content">
            <Paragraph size="sm" className="subtitle">
              Conectando você ao que importa
            </Paragraph>
            <Heading size="lg">
              Inteligência para Crescimento Estratégico
            </Heading>
            <Paragraph size="md">
              Descomplicamos a gestão para garantir resultados consistentes e
              previsíveis em cada aspecto crucial do seu negócio.
            </Paragraph>
          </div>
          <div className="buttons">
            <Button button_size="xxl" styles="primary">
              Agendar Chamada
            </Button>
            <Button button_size="xxl" styles="secondary">
              Explorar
            </Button>
          </div>
          <div className="integrations">
            <Paragraph size="sm">Integrações Inteligentes</Paragraph>
            <div className="apps">
              <Image src={Notion} alt="Logo Notion" />
              <Image src={Stack} alt="Logo Stack" />
              <Image src={GDrive} alt="Logo Google Drive" />
              <Image src={Jira} alt="Logo Jira" />
            </div>
          </div>
        </div>
      </S.Container>
      <S.SocialSection>
        <div className="paragraph">
          <Paragraph size="sm">
            Junte-se a mais de X.000 empresas que já estão crescendo
          </Paragraph>
        </div>
        <div className="logos">
          <Image src={Layers} alt="Logo Layers" />
          <Image src={Sisyphus} alt="Logo Sisyphus" />
          <Image src={Circooles} alt="Logo Circooles" />
          <Image src={Catalog} alt="Logo Catalog" />
          <Image src={Quotient} alt="Logo Quotient" />
          <Image src={Hourglass} alt="Loogo Hourglass" />
        </div>
      </S.SocialSection>
      <S.SectionFeatures>
        <div className="inteligence">
          <div className="text">
            <div>
              <Subtitle size="sm" className="subtitle">
                Por que a Bilgi Intelligence?
              </Subtitle>
            </div>
            <div className="heading">
              <Heading size="md">
                A única consultoria de que você precisa. Simples.
              </Heading>
            </div>
            <div className="paragraph">
              <Paragraph size="lg">
                Otimize seus gastos, reduza custos e deixe a parte complicada
                com a gente.
              </Paragraph>
            </div>
          </div>
        </div>
      </S.SectionFeatures>
    </>
  )
}
