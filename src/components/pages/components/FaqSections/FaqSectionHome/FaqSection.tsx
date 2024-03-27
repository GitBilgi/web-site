'use client'
import { Heading } from '@/components/core/Typography/Heading'
import { SectionFaq } from './FaqSection.Style'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { FaqItem } from '@/components/core/FaqItem'
import { ItemFaq } from './FaqSection.interface'

export function FaqSectionHome() {
  return (
    <SectionFaq>
      <div className="text">
        <div className="heading">
          <Heading size="md">Perguntas Frequentes</Heading>
        </div>
        <div className="subtitle">
          <Paragraph size="md">
            Tudo o que você precisa saber sobre os serviços e o faturamento.
          </Paragraph>
        </div>
      </div>
      <div className="container">
        <div className="container-faqitem">
          {ItemFaq.map((item, idx) => (
            <FaqItem
              key={idx}
              question={item.question}
              response={item.response}
              firstFaq={idx === 0}
              lastFaq={idx === ItemFaq.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionFaq>
  )
}
