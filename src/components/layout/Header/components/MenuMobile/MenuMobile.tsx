'use client'

import { Icon } from '@/components/core/Icon'
import { Container } from './MenuMobile.style'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
import { NavForm } from '../../HeaderNav.form'
import * as S from './MenuMobile.style'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/images/Logo.png'
import Image from 'next/image'
import { Button } from '@/components/core/Buttons/Button'
import { useRouter } from 'next/navigation'

interface Props {
  menuIsVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  const router = useRouter()

  return (
    <Container isVisible={menuIsVisible}>
      <div className="container-menu-bar">
        <div>
          <Image src={Logo} alt="Logo Bilgi" className="logo" />
        </div>
        <div onClick={() => setMenuIsVisible(false)}>
          <Icon
            size="lg"
            className="icon"
            IconRender={XMarkIcon}
            mode={'hard-gray'}
          />
        </div>
      </div>

      <div className="nav-bar">
        <S.Nav>
          {NavForm.map((item, idx) => (
            <ButtonLink key={idx} size="md" link={item.link} mode="gray">
              {item.children}
            </ButtonLink>
          ))}
        </S.Nav>
      </div>
      <div className="footer-mobile">
        <div className="content-footer">
          <ButtonLink link="/" mode="gray" size="md">
            Contato
          </ButtonLink>
          <ButtonLink link="/" mode="gray" size="md">
            Sobre Nós
          </ButtonLink>
        </div>
        <div className="content-footer">
          <ButtonLink link="/" mode="gray" size="md">
            Política de Privacidade
          </ButtonLink>
          <ButtonLink link="/" mode="gray" size="md">
            Termos de Uso
          </ButtonLink>
        </div>
      </div>
      <div className="button">
        <Button
          button_size="xxl"
          styles="primary"
          onClick={() => router.push('/form')}
        >
          Agendar Chamada
        </Button>
      </div>
    </Container>
  )
}
