import * as S from './Heading.styles'

import { ReactNode } from 'react'

interface Props {
  size: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  children: string | number | ReactNode
}

export function Heading({ size, className, children }: Props) {
  return (
    <S.Container size={size} className={className}>
      {children}
    </S.Container>
  )
}

Heading.defaultProps = {
  className: undefined
}
