'use client'

export interface FaqItens {
  question: string
  response: string
}

export const ItemFaq: FaqItens[] = [
  {
    question: 'Há uma avaliação gratuita disponível?',
    response:
      'Sim, nossa Demo de Business Intelligence esta disponível para teste em nosso site por tempo ilimitado, caso haja dúvidas em algum de nossos serviços poderá constatar um de nossos especialistas.'
  },
  {
    question: 'Posso alterar meu plano posteriormente?',
    response:
      'Sim, nossos especialistas realizam a proposta de acordo com a necessidade do cliente, podendo realizar um upgrade a qualquer momento.'
  },
  {
    question: 'Qual é sua política de cancelamento?',
    response: ''
  },
  {
    question: 'Outras informações podem ser adicionadas a uma fatura?',
    response: ''
  },
  {
    question: 'Como funciona a cobrança?',
    response: ''
  },
  {
    question: 'Como faço para alterar o e-mail da minha conta?',
    response: ''
  }
]
