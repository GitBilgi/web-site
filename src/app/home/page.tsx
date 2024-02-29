'use client'

import { Heading } from '@/components/core/Typography/Heading'
import { TITLE_HOME } from '@/constants/title.browser'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = TITLE_HOME
  }, [])

  return (
    <div>
      <Heading size="lg">Site em construção</Heading>
    </div>
  )
}
