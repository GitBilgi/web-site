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
import { XMarkIcon } from '@heroicons/react/24/solid'

export function Header() {
  const { isMobile } = useDeviceDetection()
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  return (
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
            <Button button_size="sm" styles="primary">
              Agendar Chamada
            </Button>
          </div>
        </S.Content>
      ) : (
        <div>
          <div>
            <Image src={Logo} alt="Logo Bilgi" />
          </div>

          <div onClick={() => setMenuIsVisible(true)}>
            <Icon
              size="lg"
              className="icon"
              IconRender={XMarkIcon}
              mode={'hard-gray'}
            />
          </div>
        </div>
      )}
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
    </S.Container>
  )
}
