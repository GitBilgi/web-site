'use client'

import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${props => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    .heading {
      padding-bottom: 16px;
      text-transform: uppercase;
    }

    .container-info-footer {
      gap: 48px;
      width: 1280px;
      height: 132px;
      display: flex;
      justify-content: center;
      padding: 0px, 32px, 0px, 32px;
    }

    .Container-Logo {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .ContainerFooter {
      display: flex;
      padding-top: 64px;
      flex-direction: row;
      padding-bottom: 48px;

      @media (max-width: 1035px) {
        width: 100%;
        height: auto;
        padding: 40px;
        justify-content: center;
      }
      @media (max-width: 768px) {
        padding: 10px;

        .produtos {
          padding-left: 35px;
        }
      }
      .produtos {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }

    .Container-infos {
      gap: 12px;
      display: flex;
      flex-direction: column;
    }

    .copyright {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }

    .component-copy {
      width: 1280px;
      height: 120px;
      display: flex;
      padding: 3rem 238px;
      align-items: center;
      justify-content: space-between;

      .icon-union {
        width: 25.5px;
        height: 20px;
      }
      @media (max-width: 1035px) {
        width: 100%;
        padding: 20px 0;
        justify-content: center;
      }
      @media (max-width: 768px) {
        padding: 0;
        gap: 24px;
        flex-direction: column-reverse;
      }
    }
    .direitos {
      display: flex;
      gap: ${props.theme.spacing.spacing_8};

      @media (max-width: 1035px) {
        padding-right: 32px;
        justify-content: center;
        flex-direction: column-reverse;
      }
    }
    .media-icons {
      display: flex;
      gap: ${props.theme.spacing.spacing_6};

      @media (max-width: 768px) {
        width: 100%;
        padding-left: 35px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      padding: 0;
      padding-top: 46px;
      flex-direction: column;
      justify-content: center;

      .ContainerFooter {
        display: flex;
        flex-direction: column;
        height: auto;
      }
      .container-info-footer {
        max-width: 100%;
        flex-direction: column;
        height: auto;
      }
    }
  `}
`
