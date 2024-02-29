'use client'
import Image from 'next/image'

import Logo from '@/images/Logo.png'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
import { NavForm } from './HeaderNav.form'
import { Button } from '@/components/core/Buttons/Button'

import * as S from './Header.style'

export function Header() {
  return (
    <S.Container>
      <div className="ContainerHeader">
        <div className="logo">
          <Image src={Logo} className="logo" alt="Logo Bilgi" />
        </div>
        <S.Nav>
          {NavForm.map((item, idx) => (
            <ButtonLink key={idx} size="md" link={item.link} mode="gray">
              {item.children}
            </ButtonLink>
          ))}
        </S.Nav>

        <Button button_size="sm" styles="primary">
          Agendar Chamada
        </Button>
      </div>
    </S.Container>
  )
}
