'use client'

import Build from '@/images/build.png'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import Image from 'next/image'
import * as S from './Dados.Style'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'

export function Dados() {
  const router = useRouter()

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
          <div className="image">
            <Image src={Build} alt="imagem ilustrativa" className="imagem" />
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
