'use client'

import styled, { css } from 'styled-components'

interface ContainerProps {
  isMobile?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${props => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .button {
      display: block;

      @media (max-width: 768px) {
        display: none;
      }
    }
    ${props.isMobile && css``}
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.6rem 8rem;
  width: 1280px;
`

export const Nav = styled.nav`
  ${props => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing.spacing_8};
  `}
`
