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
import Layers from '@/images/Layers.png'
import Notion from '@/images/notion.png'
import GDrive from '@/images/g-drive.png'
import Check from '@/images/filecheck.png'
import Catalog from '@/images/Catalog.png'
import Quotient from '@/images/Quotient.png'
import Sisyphus from '@/images/Sisyphus.png'
import Breackout from '@/images/breakout.png'
import Circooles from '@/images/Circooles.png'
import Hourglass from '@/images/Hourglass.png'
import Message from '@/images/MessageSmile.png'
import MessageCircle from '@/images/MessageChat.png'
import Zap from '@/images/zap.png'
import BrakoutRed from '@/images/BreakoutRed.png'

/*Images*/

import Build from '@/images/build.png'
import Background from '@/images/background.png'
import { GoogleMaps } from './components/GoogleMaps'
import { CarouselSupport } from './components/Carousel'
import { FaqSection } from '../components/FaqSection'

export function HomePage() {
  return (
    <>
      <S.Container>
        <div className="image-background">
          <Image src={Background} alt="Imagem de Fundo HomePage" />
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

      <S.SectionDados>
        <div className="text">
          <div className="content-text">
            <div className="demonstration">
              <Heading size="xxs" className="paragraph">
                Demonstração
              </Heading>
            </div>
            <div className="potencial">
              <Heading size="md">
                Potencialize Seus Dados: Explore a prévia de um dos nossos
                dashboards
              </Heading>
            </div>
            <div className="analise">
              <Paragraph size="lg">
                Análise avançada de crescimento e produto de autoatendimento
                para ajudá-lo a converter, envolver e reter mais usuários.
              </Paragraph>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="content-container">
            <div className="image">
              <Image src={Build} alt="imagem ilustrativa" className="imagem" />
            </div>
          </div>

          <div className="div-button">
            <Button button_size="xxl" styles="primary">
              Agendar Chamada
            </Button>
          </div>
        </div>

        <div className="card-container">
          <div className="cards">
            <div className="feature-icon">
              <div className="content-icon">
                <div>
                  <Image
                    src={MessageCircle}
                    alt="Icone de Mensagem"
                    className="icon"
                  />
                </div>
              </div>
            </div>
            <div className="feature-heading">
              <Heading size="sm">Destaque</Heading>
            </div>
            <div className="feature-paragraph">
              <Paragraph size="sm">
                Não importa se você tem uma equipe de 2 ou 200 pessoas, nossas
                caixas de entrada compartilhadas mantêm todos na mesma página.
              </Paragraph>
            </div>
          </div>

          <div className="cards">
            <div className="feature-icon">
              <div className="content-icon">
                <div>
                  <Image src={Zap} alt="Icone de Mensagem" className="icon" />
                </div>
              </div>
            </div>
            <div className="feature-heading">
              <Heading size="sm">Destaque</Heading>
            </div>
            <div className="feature-paragraph">
              <Paragraph size="sm">
                Uma plataforma completa de atendimento ao cliente que ajuda você
                a equilibrar tudo o que seus clientes precisam para ficarem
                satisfeitos.
              </Paragraph>
            </div>
          </div>

          <div className="cards">
            <div className="feature-icon">
              <div className="content-icon">
                <div>
                  <Image
                    src={BrakoutRed}
                    alt="Icone de Mensagem"
                    className="icon"
                  />
                </div>
              </div>
            </div>
            <div className="feature-heading">
              <Heading size="sm">Destaque</Heading>
            </div>
            <div className="feature-paragraph">
              <Paragraph size="sm">
                Meça o que importa com os relatórios fáceis de usar da Bilgi.
                Você pode filtrar, exportar e detalhar os dados com apenas
                alguns cliques.
              </Paragraph>
            </div>
          </div>
        </div>
      </S.SectionDados>

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

      <S.SectionSupport>
        <div className="content">
          <div className="text">
            <Subtitle size="lg">
              Love the simplicity of the service and the prompt customer
              support. We can’t imagine working without it.
            </Subtitle>
          </div>
          <div className="carousel">
            <CarouselSupport />
          </div>
        </div>
      </S.SectionSupport>
      <FaqSection />
    </>
  )
}
