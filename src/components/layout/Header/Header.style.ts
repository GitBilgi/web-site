'use client'

import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .ContainerHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Nav = styled.nav`
  ${props => css`
    width: 80rem;
    display: flex;
    align-items: center;
    padding-left: ${props.theme.spacing.spacing_10};
    gap: ${props.theme.spacing.spacing_8};
  `}
`
