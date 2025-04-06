interface INavForm {
  link: string

  children: string
}

export const NavForm: INavForm[] = [
  {
    link: '/home',
    children: 'Home'
  },
  {
    link: '/processos',
    children: 'BPO de Controladoria'
  },
  {
    link: '/business-inteligence',
    children: 'Desenvolvimento'
  },
  {
    link: '/contact-center',
    children: 'Contabilidade'
  }
]
