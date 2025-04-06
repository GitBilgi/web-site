'use client'

import { Icon } from '@/components/core/Icon'
import * as S from './Atualization.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/core/Buttons/Button'
// import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { useRouter } from 'next/navigation'

export function Atualization() {
  // const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerAtualization>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon
              IconRender={CheckBadgeIcon}
              size="lg"
              className="icon-customise"
            />
          </div>
          <div className="heading">
            <Heading size="md">
              Resultado Baseado em Dados: Tomada de Decisão Estratégica
            </Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              A Redução de Custos: Eficiência Operacional e Otimização de
              Recursos
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
                A utilização de dados precisos e atualizados permite uma análise
                mais eficaz do desempenho financeiro e operacional da empresa.
                Ao coletar e analisar informações de diferentes fontes, como
                vendas, fluxo de caixa, indicadores de desempenho (KPIs) e
                custos operacionais, é possível tomar decisões mais assertivas.
                Isso inclui identificar áreas de alto desempenho, pontos de
                melhoria e potenciais oportunidades de crescimento. O uso de
                dados permite projetar cenários, otimizar processos e prever
                tendências de mercado, resultando em decisões estratégicas que
                impactam positivamente os resultados financeiros e a
                competitividade da empresa.
              </Paragraph>
            </div>
            <div className="textarea">
              <Icon
                IconRender={CheckCircleIcon}
                size="md"
                mode="primary"
                className="size"
              />

              <Paragraph size="md" className="paragraph">
                A redução de custos não significa apenas cortar despesas, mas
                sim melhorar a eficiência operacional. Ao analisar os dados de
                forma detalhada, é possível identificar onde os recursos estão
                sendo desperdiçados ou mal alocados. Isso pode envolver desde a
                otimização de processos internos, melhoria no uso de tecnologia,
                até renegociação de contratos com fornecedores. A implementação
                de medidas para reduzir o desperdício de recursos e melhorar a
                produtividade pode resultar em uma redução significativa dos
                custos fixos e variáveis, proporcionando maior margem de lucro e
                aumento da rentabilidade.
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
      {/* 
      {!isMobile ? (
        <div className="container2">
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )} */}
    </S.ContainerAtualization>
  )
}
