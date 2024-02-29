import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  )
}
