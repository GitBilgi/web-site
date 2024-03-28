'use client'

import { Subtitle } from '@/components/core/Typography/Subtitle'
import * as S from './ContainerFeatures.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import Image from 'next/image'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
import { Icon } from '@/components/core/Icon'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Breackout from '@/images/breakout.png'
import Check from '@/images/filecheck.png'

import Message from '@/images/MessageSmile.png'

export function FeatureSection() {
  return (
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
              Otimize seus gastos, reduza custos e deixe a parte complicada com
              a gente.
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
                  Gerenciamento Estratégico
                </Heading>
              </div>
              <div className="paragraph-feature">
                <Paragraph size="sm">
                  Garanta resultados previsíveis e consistentes para sua empresa
                  ao planejar e controlar os processos críticos. Utilizamos
                  abordagens simples, como fluxogramas de tarefas e
                  procedimentos padrão, para garantir eficiência operacional.
                </Paragraph>
              </div>
            </div>
            <div className="buttonlink">
              <ButtonLink link="/processos" mode="red" size="md">
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
                  exclusiva plataforma de e-learning e à automação de processos
                  de ERP, proporcionando insights valiosos para o crescimento do
                  seu negócio.
                </Paragraph>
              </div>
            </div>
            <div className="buttonlink">
              <ButtonLink link="/business-inteligence" mode="red" size="md">
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
                  Contact Center
                </Heading>
              </div>
              <div className="paragraph-feature">
                <Paragraph size="sm">
                  Descomplicamos o suporte ao cliente, indo diretamente até você
                  para treinar sua equipe e solucionar desafios na busca por mão
                  de obra. Nosso Contact Center oferece terceirização flexível,
                  com planos para horário comercial e além.
                </Paragraph>
              </div>
            </div>
            <div className="buttonlink">
              <ButtonLink link="/contact-center" mode="red" size="md">
                Explorer
              </ButtonLink>
              <Icon size="xs" IconRender={ArrowRightIcon} mode="primary" />
            </div>
          </div>
        </div>
      </div>
    </S.SectionFeatures>
  )
}
