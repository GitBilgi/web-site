'use client'

import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import * as S from './Dados.Style'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'
import 'animate.css'
import { useEffect, useRef } from 'react'

export function Dados() {
  const router = useRouter()

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

      <div className="container">
        <div className="content-container">
          <div className="image" ref={containerRef}>
            <iframe
              title="atividade"
              width="800"
              height="500"
              src="https://app.powerbi.com/view?r=eyJrIjoiNTViZTliNWEtNTA1Mi00MzI5LWIwMmItZDA1YTllNDlhNTQxIiwidCI6IjYzOWQ1NmI2LTlhNWMtNDUxNC1iODFjLWZkMzgxMTY2MzFlYiJ9"
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
    </S.SectionDados>
  )
}
