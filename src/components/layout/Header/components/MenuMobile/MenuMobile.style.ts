import styled, { css } from 'styled-components'

interface Props {
  isVisible: boolean
}

export const Container = styled.div<Props>`
  ${props => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 952px;
    display: flex;
    position: fixed;
    z-index: 1000;
    flex-direction: column;
    backdrop-filter: blur(3px);

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
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 75px;
      margin-left: 16px;
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
    text-align: start;
    padding: 24px 16px;
    flex-direction: row;
    border-top: solid 1px #eaecf0;

    .content-footer {
      gap: 20px;
      width: 200px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .button {
    width: 100%;
    padding: 24px 16px;
    align-items: center;
    justify-content: center;
    border-top: solid 1px #eaecf0;
  }
`
export const Nav = styled.nav``
