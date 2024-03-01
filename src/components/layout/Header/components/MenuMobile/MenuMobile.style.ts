import styled, { css } from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Container = styled.div<Props>`
  ${props => css`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ac1d35;

    opacity: 0;
    pointer-events: none;

    .icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }

    ${props.isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
  `}
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
