'use client'
import * as S from './ContainerFeatures.Style'
import Image from 'next/image'

import Fast from '@/images/Icon.png'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'

export function Features() {
  const router = useRouter()

  return (
    <S.ContainerFeatures>
      <div className="text-content">
        <div className="icon">
          <div className="content-icon">
            <Image src={Fast} alt="icone zap-fast" className="icon-customise" />
          </div>
        </div>
        <Heading size="md">Passo a Passo</Heading>
        <Paragraph size="lg">
          Processos detalhados, integração eficiente e auditoria colaborativa
          para maximizar eficiência e reduzir custos.
        </Paragraph>
      </div>
      <div className="container-card">
        <div className="card">
          <div className="card-content">
            <div className="icon1">
              <Paragraph size="lg" className="paragraph">
                #1
              </Paragraph>
            </div>
            <div className="text-card">
              <div className="content-heading">
                <Heading size="sm">Mapeamento</Heading>
              </div>

              <div className="content-text-card">
                <Paragraph size="sm">
                  Detalhamos todos os processos e criamos diagramas de forma
                  interativa, envolvendo colaboradores na construção.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="card-content">
            <div className="icon1">
              <Paragraph size="lg" className="paragraph">
                #2
              </Paragraph>
            </div>
            <div className="text-card">
              <div className="content-heading">
                <Heading size="sm">Transformação</Heading>
              </div>

              <div className="content-paragraph">
                <Paragraph size="sm">
                  Integramos setores em projetos de melhoria, convertendo
                  processos em ferramentas eficientes, aumentando produtividade
                  e valor para clientes.
                </Paragraph>
              </div>
            </div>
          </div>

          <div className="card-content">
            <div className="icon1">
              <Paragraph size="lg" className="paragraph">
                #3
              </Paragraph>
            </div>
            <div className="text-card">
              <div className="content-heading">
                <Heading size="sm">Auditoria</Heading>
              </div>

              <div className="content-text-card">
                <Paragraph size="sm">
                  Nossa forma única de auditoria é colaborativa e em poucas
                  fases, tornando a auditoria menos custosa e cansativa do que
                  métodos tradicionais.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        button_size="xxl"
        styles="primary"
        onClick={() => router.push('/form')}
      >
        Agendar Chamada
      </Button>
    </S.ContainerFeatures>
  )
}
