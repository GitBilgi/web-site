'use client'

/* Icons*/
import MessageCircle from '@/images/MessageChat.png'
import Zap from '@/images/zap.png'
import BrakoutRed from '@/images/BreakoutRed.png'
import Image from 'next/image'
/*Images*/

import Build from '@/images/build.png'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

import * as S from './SectionDados.Style'
import 'animate.css'

export function DadosSection() {
  const router = useRouter()

  const { isMobile } = useDeviceDetection()

  const containerRef = useRef(null) // Criamos a ref aqui

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__zoomIn')
          }
        })
      },
      {
        threshold: 0.8
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <S.SectionDados>
      <div className="text">
        <div className="content-text">
          <div className="demonstration">
            <Heading size="xxs" className="paragraph">
              Demonstração
            </Heading>
          </div>
          <div className="potencial">
            <Heading size="md" className="analise">
              Potencialize Seus Dados: Explore a prévia de um dos nossos
              dashboards
            </Heading>
          </div>
          <div>
            <Paragraph size="lg" className="analise">
              Análise avançada de crescimento e produto de autoatendimento para
              ajudá-lo a converter, envolver e reter mais usuários.
            </Paragraph>
          </div>
        </div>
      </div>

      {!isMobile ? (
        <div className="container">
          <div className="content-container">
            <div className="image" ref={containerRef}>
              {/* <iframe
                title="atividade"
                width="800"
                height="500"
                src="https://app.powerbi.com/view?r=eyJrIjoiNTViZTliNWEtNTA1Mi00MzI5LWIwMmItZDA1YTllNDlhNTQxIiwidCI6IjYzOWQ1NmI2LTlhNWMtNDUxNC1iODFjLWZkMzgxMTY2MzFlYiJ9"
              /> */}

              <Image
                src={Build}
                alt="imagem de um BI fictício"
                className="image"
              />
            </div>
          </div>

          <div className="div-button">
            <Button
              button_size="xxl"
              styles="primary"
              onClick={() => router.push('/form')}
            >
              Agendar Chamada
            </Button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="content-container">
            <div className="image" ref={containerRef}>
              {/* <iframe
                title="atividade"
                width="500"
                height="280"
                src="https://app.powerbi.com/view?r=eyJrIjoiNTViZTliNWEtNTA1Mi00MzI5LWIwMmItZDA1YTllNDlhNTQxIiwidCI6IjYzOWQ1NmI2LTlhNWMtNDUxNC1iODFjLWZkMzgxMTY2MzFlYiJ9"
              /> */}
              <Image
                src={Build}
                alt="imagem de um BI fictício"
                className="image"
              />
            </div>
          </div>

          <div className="div-button">
            <Button
              button_size="xxl"
              styles="primary"
              onClick={() => router.push('/form')}
            >
              Agendar Chamada
            </Button>
          </div>
        </div>
      )}

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
              Uma plataforma completa de atendimento ao cliente que ajuda você a
              equilibrar tudo o que seus clientes precisam para ficarem
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
              Meça o que importa com os relatórios fáceis de usar da Bilgi. Você
              pode filtrar, exportar e detalhar os dados com apenas alguns
              cliques.
            </Paragraph>
          </div>
        </div>
      </div>
    </S.SectionDados>
  )
}
