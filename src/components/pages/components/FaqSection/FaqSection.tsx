'use client'
import { Heading } from '@/components/core/Typography/Heading'
import { SectionFaq } from './FaqSection.Style'

export function FaqSection() {
  return (
    <SectionFaq>
      <div className="text">
        <div className="heading">
          <Heading size="md">Perguntas Frequentes</Heading>
        </div>
      </div>
    </SectionFaq>
  )
}
