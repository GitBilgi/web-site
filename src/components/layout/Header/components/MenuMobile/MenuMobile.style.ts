import styled, { css } from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Container = styled.div<Props>`
  ${props => css`
    top: 0;
    left: 0;
    right: 0;
    height: 952px;
    position: absolute;
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;

    background-color: #fff;

    opacity: 0;
    pointer-events: none;

    .icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    nav {
      gap: 5rem;
      display: flex;
      padding-top: 45px;
      padding-left: 16px;
      flex-direction: column;
      justify-content: center;
    }

    ${props.isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
  `}

  .container-menu-bar {
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 89px;
    }
  }
  .nav-bar {
    width: 100%;
    height: 544px;
    padding-top: 24px;
    border-top: solid 1px #eaecf0;
  }

  .footer-mobile {
    width: 100%;
    display: flex;
    padding: 24px 16px;
    flex-direction: row;
    text-align: start;
    border-top: solid 1px #eaecf0;

    .content-footer {
      width: 200px;
      height: 68px;
      display: flex;
      gap: 20px;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
  .button {
    width: 100%;
    display: block;
    align-items: center;
    justify-content: center;
    border-top: solid 1px #eaecf0;
    padding: 24px 16px;
  }
`
export const Nav = styled.nav``
