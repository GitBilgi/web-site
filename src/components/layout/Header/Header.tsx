'use client'
import Image from 'next/image'

import Logo from '@/images/Logo.png'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
import { NavForm } from './HeaderNav.form'
import { Button } from '@/components/core/Buttons/Button'

import { useState } from 'react'
import { MenuMobile } from './components/MenuMobile/MenuMobile'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

import * as S from './Header.style'
import { Icon } from '@/components/core/Icon'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

import Head from 'next/head' // Importando Head do Next.js

export function Header() {
  const { isMobile } = useDeviceDetection()
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  const router = useRouter()

  return (
    <>
      {/* Adicionando a tag do Google no Head */}
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LYKMMJ39G8"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LYKMMJ39G8');
          `}
        </script>
      </Head>

      <S.Container isMobile={isMobile}>
        {!isMobile ? (
          <S.Content>
            <div className="logo">
              <Image src={Logo} alt="Logo Bilgi" />
            </div>

            <S.Nav>
              {NavForm.map((item, idx) => (
                <ButtonLink key={idx} size="md" link={item.link} mode="gray">
                  {item.children}
                </ButtonLink>
              ))}
            </S.Nav>

            <div className="button">
              <Button
                button_size="sm"
                styles="primary"
                onClick={() => router.push('/form')}
              >
                Agendar Chamada
              </Button>
            </div>
          </S.Content>
        ) : (
          <div className="menu-bar">
            <div className="LogoImage">
              <Image src={Logo} alt="Logo Bilgi" />
            </div>

            <div className="hamburguer">
              <div onClick={() => setMenuIsVisible(true)}>
                <Icon
                  size="lg"
                  className="icon"
                  IconRender={Bars2Icon}
                  mode={'hard-gray'}
                />
              </div>
            </div>
          </div>
        )}
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      </S.Container>
    </>
  )
}
