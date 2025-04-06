'use client'
import { Icon } from '@/components/core/Icon'
import * as S from './Cobrança.Style'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
// import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export function ChargeSection() {
  // const { isMobile } = useDeviceDetection()

  const router = useRouter()

  return (
    <S.ContainerCharge>
      <div className="container1">
        <div className="content">
          <div className="content-icon">
            <Icon
              IconRender={CurrencyDollarIcon}
              size="lg"
              className="icon-customise"
            />
          </div>
          <div className="heading">
            <Heading size="md">
              Otimização e Recuperação de crédito Tributário
            </Heading>
          </div>
          <div className="paragraph">
            <Paragraph size="lg">
              Trazendo de volta o seu crédito tribuário.
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
                A primeira etapa na recuperação de crédito tributário é
                identificar valores pagos a maior ou indevidamente. Isso inclui
                a revisão de pagamentos de impostos como ICMS, PIS, COFINS e
                IPI, entre outros. A análise detalhada de notas fiscais,
                registros contábeis e declarações fiscais pode revelar créditos
                que podem ser recuperados, seja por erros no cálculo dos
                tributos ou pela aplicação de alíquotas incorretas.
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
                Uma vez identificados os créditos tributários, é fundamental
                determinar a melhor forma de compensação. Isso envolve a
                utilização de créditos para compensar débitos tributários
                devidos à Receita Federal ou outros órgãos fiscais. A
                compensação é um processo formal que exige o preenchimento
                correto de documentos e o cumprimento de prazos específicos. A
                consultoria especializada garante que a compensação seja feita
                corretamente, minimizando o risco de contestação ou rejeição.
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
                Além dos pagamentos indevidos, muitas vezes há créditos
                tributários passíveis de recuperação relacionados ao não
                aproveitamento de benefícios fiscais ou à inaplicação de
                isenções. A revisão de obrigações acessórias, como o SPED
                Fiscal, DCTF e outros documentos eletrônicos, permite
                identificar oportunidades de recuperação de créditos que não
                foram utilizados de maneira adequada, otimizando os recursos
                financeiros da empresa.
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
                Caso os créditos tributários não possam ser recuperados de forma
                simples ou direta, é possível recorrer a processos
                administrativos ou judiciais. A recuperação pode ser realizada
                por meio de ações judiciais (mandado de segurança, ações de
                repetição de indébito, entre outras) ou pelo ingresso em
                processos administrativos junto à Receita Federal. O
                acompanhamento e gerenciamento desses processos garantem a
                obtenção dos créditos de maneira eficiente, considerando a
                complexidade e os prazos envolvidos.
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

      {/* {!isMobile ? (
        <div className="container2">
          <div className="content-image"></div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image"></div>
        </div>
      )} */}
    </S.ContainerCharge>
  )
}
