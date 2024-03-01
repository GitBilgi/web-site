'use client'

import { Icon } from '@/components/core/Icon'
import { Container } from './MenuMobile.style'
import { ButtonLink } from '@/components/core/Buttons/ButtonLink'
import { NavForm } from '../../HeaderNav.form'
import * as S from './MenuMobile.style'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  menuIsVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  return (
    <Container isVisible={menuIsVisible}>
      <div onClick={() => setMenuIsVisible(false)}>
        <Icon
          size="lg"
          className="icon"
          IconRender={XMarkIcon}
          mode={'hard-gray'}
        />
      </div>

      <S.Nav>
        {NavForm.map((item, idx) => (
          <ButtonLink key={idx} size="md" link={item.link} mode="gray">
            {item.children}
          </ButtonLink>
        ))}
      </S.Nav>
    </Container>
  )
}
