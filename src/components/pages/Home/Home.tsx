'use client'

import Image from 'next/image'
import * as S from './Home.style'

import { Icon } from '@/components/core/Icon'
import { Button } from '@/components/core/Buttons/Button'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Heading } from '@/components/core/Typography/Heading'
import { Subtitle } from '@/components/core/Typography/Subtitle'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
import { Paragraph } from '@/components/core/Typography/Paragraph'

/* Icons */

import Jira from '@/images/jira.png'
import Stack from '@/images/slack.png'
import Notion from '@/images/notion.png'
import GDrive from '@/images/g-drive.png'
import Check from '@/images/filecheck.png'
import Breackout from '@/images/breakout.png'
import Message from '@/images/MessageSmile.png'

import Background from '@/images/background.png'
import { GoogleMaps } from './components/GoogleMaps'
import { SocialSection } from '../components/SocialSection'
import { DadosSection } from '../components/SectionDados'

export function HomePage() {
  return (
    <>
      <S.Container>
        <div className="image-background">
          <Image
            src={Background}
            alt="Imagem de Fundo HomePage"
            className="img"
          />
        </div>
        <div className="container">
          <div className="content">
            <Heading size="xxs" className="subtitle">
              Conectando você ao que importa
            </Heading>
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
      <SocialSection />
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

        <div className="container-cards">
          <div className="cards">
            <div className="feature-text">
              <div className="feature-icon">
                <Image src={Check} alt="File Check" />
              </div>
              <div className="heading-feature">
                <div className="content-heading">
                  <Heading size="sm" mode="dark">
                    Gestão Simplificada de Processos
                  </Heading>
                </div>
                <div className="paragraph-feature">
                  <Paragraph size="sm">
                    Garanta resultados previsíveis e consistentes para sua
                    empresa ao planejar e controlar os processos críticos.
                    Utilizamos abordagens simples, como fluxogramas de tarefas e
                    procedimentos padrão, para garantir eficiência operacional.
                  </Paragraph>
                </div>
              </div>
              <div className="buttonlink">
                <ButtonLink link="/" mode="red" size="md">
                  Explorer
                </ButtonLink>
                <Icon size="xs" IconRender={ArrowRightIcon} mode="primary" />
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="feature-text">
              <div className="feature-icon">
                <Image src={Breackout} alt="File Check" />
              </div>
              <div className="heading-feature">
                <div className="content-heading">
                  <Heading size="sm" mode="dark">
                    Análise Inteligente de Desempenho
                  </Heading>
                </div>
                <div className="paragraph-feature">
                  <Paragraph size="sm">
                    Aproveite serviços avançados de Big Data, Analytics e
                    Inteligência Artificial. Além disso, tenha acesso à nossa
                    exclusiva plataforma de e-learning e à automação de
                    processos de ERP, proporcionando insights valiosos para o
                    crescimento do seu negócio.
                  </Paragraph>
                </div>
              </div>
              <div className="buttonlink">
                <ButtonLink link="/" mode="red" size="md">
                  Explorer
                </ButtonLink>
                <Icon size="xs" IconRender={ArrowRightIcon} mode="primary" />
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="feature-text">
              <div className="feature-icon">
                <Image src={Message} alt="File Check" />
              </div>
              <div className="heading-feature">
                <div className="content-heading">
                  <Heading size="sm" mode="dark">
                    Call Center
                  </Heading>
                </div>
                <div className="paragraph-feature">
                  <Paragraph size="sm">
                    Descomplicamos o suporte ao cliente, indo diretamente até
                    você para treinar sua equipe e solucionar desafios na busca
                    por mão de obra. Nosso Contact Center oferece terceirização
                    flexível, com planos para horário comercial e além.
                  </Paragraph>
                </div>
              </div>
              <div className="buttonlink">
                <ButtonLink link="/" mode="red" size="md">
                  Explorer
                </ButtonLink>
                <Icon size="xs" IconRender={ArrowRightIcon} mode="primary" />
              </div>
            </div>
          </div>
        </div>
      </S.SectionFeatures>

      <DadosSection />
      <S.SectionMap>
        <div className="header">
          <div>
            <Heading size="xxs" className="heading-xxs">
              Onde estamos
            </Heading>
          </div>
          <div className="heading">
            <Heading size="md">
              Feito com excelência, em todos os lugares
            </Heading>
          </div>
        </div>
        <div className="maps">
          <GoogleMaps />
        </div>
      </S.SectionMap>
    </>
  )
}
