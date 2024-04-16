'use client'

import { Header } from '@/components/layout/Header'
import { ContainerForm } from './ContainerForm/ContainerForm'
import { Footer } from '@/components/layout/Footer'

export function FormPage() {
  return (
    <>
      <Header />

      <ContainerForm />

      <Footer />
    </>
  )
}
