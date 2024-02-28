'use client'

import { FaqItem } from '@/components/core/FaqItem'
import { TITLE_HOME } from '@/constants/title.browser'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = TITLE_HOME
  }, [])

  return (
    <div>
      <FaqItem
        question="Há uma avaliação gratuita disponível?"
        response="Sim, você pode nos testar gratuitamente por 30 dias. Se desejar, forneceremos uma chamada de integração personalizada e gratuita de 30 minutos para que você comece a trabalhar o mais rápido possível."
        defaultOpen={true}
        visible={true}
      />
    </div>
  )
}
