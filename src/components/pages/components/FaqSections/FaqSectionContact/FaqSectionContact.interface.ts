'use client'

export interface FaqItens {
  question: string
  response: string
}

export const ItemFaq: FaqItens[] = [
  {
    question: 'Como funciona um contact center?',
    response:
      'Um contact center atua como uma estrutura centralizada, onde gerenciam e facilitam as interações com os clientes através de uma variedade de canais de comunicação, como telefone, chat, redes sociais. Coordenam atividades que abrangem desde o atendimento ao cliente e suporte técnico até cobrança e outras áreas relacionadas.'
  },
  {
    question: 'Qual objetivo de um contact center?',
    response:
      'O objetivo é garantir um fluxo eficiente de comunicação entre a empresa e seus clientes, oferecendo um serviço completo e integrado para atender às necessidades e expectativas dos consumidores.'
  },
  {
    question:
      'Quais são as vantagens de terceirizar serviços para um contact center?',
    response:
      'As vantagens incluem redução de custos, acesso a especialistas em atendimento ao cliente, escalabilidade, foco na atividade principal da empresa e maior flexibilidade operacional'
  }
]
