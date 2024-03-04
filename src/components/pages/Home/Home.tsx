'use client'

import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import * as S from './Home.style'
import { Button } from '@/components/core/Buttons/Button'

export function HomePage() {
  return (
    <S.Container>
      <div className="content">
        <Paragraph size="sm" className="subtitle">
          Conectando você ao que importa
        </Paragraph>
        <Heading size="lg">Inteligência para Crescimento Estratégico</Heading>
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
    </S.Container>
  )
}
