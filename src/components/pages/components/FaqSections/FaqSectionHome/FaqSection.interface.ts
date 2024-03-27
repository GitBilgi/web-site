'use client'

export interface FaqItens {
  question: string
  response: string
}

export const ItemFaq: FaqItens[] = [
  {
    question: 'Posso alterar meu plano posteriormente?',
    response:
      'Sim, nossos especialistas realizam a proposta de acordo com a necessidade do cliente, podendo realizar um upgrade a qualquer momento.'
  },
  {
    question: 'Qual é a política de cancelamento?',
    response:
      'O cancelamento do serviço pode ser efetuado, desde que seja fornecido um aviso prévio de 60 dias. É importante ressaltar que, dependendo do serviço contratado, pode existir um período de fidelidade de 12 meses que deve ser levado em consideração antes de proceder com o cancelamento.'
  },
  {
    question: 'Como funciona a cobrança?',
    response:
      'O processo de cobrança é efetuado mediante a emissão de um boleto bancário'
  },
  {
    question: 'Há fidelidade nos serviços Bilgi?',
    response:
      'O período de fidelidade varia conforme o serviço e o plano escolhido. Para obter informações detalhadas, por favor, entre em contato com um dos nossos especialistas.'
  },
  {
    question: 'Como funciona o processo de contratação dos serviços bilgi?',
    response:
      'Dispomos de uma equipe de especialistas pronta para atendê-lo, que realizará uma análise detalhada de suas necessidades a fim de apresentar os serviços e planos mais adequados. Garantimos suporte integral de nossa equipe, do início ao fim do processo. Para entrar em contato, simplesmente selecione a opção "Agendar Chamada" em nosso site, e um de nossos especialistas entrará em contato com você.'
  }
]
