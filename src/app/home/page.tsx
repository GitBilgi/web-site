'use client'

import { TITLE_HOME } from '@/constants/title.browser'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = TITLE_HOME
  }, [])

  return (
    <div>
      <h1>Site Bilgi em Construção</h1>
    </div>
  )
}
