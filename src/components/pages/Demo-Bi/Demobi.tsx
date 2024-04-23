import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Giphy from '@/images/giphy.gif' // Certifique-se de que o caminho para o GIF está correto
import * as S from './Demobi.Style'

export function DemoBi() {
  const [loading, setLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleLoad = () => {
    setLoading(false) // Esconde o GIF de carregamento
  }

  useEffect(() => {
    // Verificamos se o iframe é não-nulo antes de adicionar o event listener
    const iframe = iframeRef.current
    if (iframe) {
      iframe.addEventListener('load', handleLoad)
      return () => {
        iframe.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  return (
    <S.Container>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {loading && (
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <div
              style={{ width: '200px', height: '200px', position: 'relative' }}
            >
              <Image
                src={Giphy}
                alt="Loading..."
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
        <iframe
          id="reportFrame"
          ref={iframeRef}
          src="https://app.powerbi.com/view?r=eyJrIjoiNDA2Y2E2MDEtN2YwZS00MDM0LWIzMzUtZDZhN2Q0ODc5NzY5IiwidCI6IjYzOWQ1NmI2LTlhNWMtNDUxNC1iODFjLWZkMzgxMTY2MzFlYiJ9"
          title="PowerBI Report"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        />
      </div>
    </S.Container>
  )
}
