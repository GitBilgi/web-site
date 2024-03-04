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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .button {
      display: flex;
    }
    ${props.isMobile && css``}
  `}

  .menu-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
  }
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
