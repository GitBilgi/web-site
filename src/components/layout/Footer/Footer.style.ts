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
      gap: 150px;
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
    }
    .produtos {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .copyright {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .component-copy {
      width: 1280px;
      height: 120px;
      display: flex;
      padding: 3rem 238px;
      align-items: center;
      justify-content: space-between;

      .icon-union {
        height: 20px;
        width: 25.5px;
      }
    }

    .direitos {
      display: flex;
      gap: ${props.theme.spacing.spacing_8};
    }
    .media-icons {
      display: flex;
      gap: ${props.theme.spacing.spacing_6};
    }

    @media (max-width: 1035px) {
      .ContainerFooter {
        width: 100%;
        height: auto;
        padding: 40px;
        justify-content: center;
      }

      .component-copy {
        width: 100%;
        height: 100%;
        padding: 20px 0;
        padding-top: 64px;
        padding-bottom: 64px;
        justify-content: center;
      }
      .direitos {
        padding-right: 32px;
      }

      .media-icons {
        display: flex;
        gap: ${props.theme.spacing.spacing_6};
      }

      .container-info-footer {
        width: 100%;
        height: 100%;
      }
      .Container-infos {
        width: 211px;
      }
    }

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
      height: 100%;
      padding-top: 46px;
      flex-direction: column;
      justify-content: center;

      .ContainerFooter {
        height: auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
      }

      .produtos {
        padding: 0;
        padding-left: 35px;
        padding-left: 16px;
      }
      .copyright {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .component-copy {
        gap: 24px;
        padding: 0;
        padding: 0;
        padding-left: 16px;
        align-items: flex-start;
        flex-direction: column-reverse;
      }
      .direitos {
        padding-right: 32px;
        justify-content: center;
        flex-direction: column-reverse;
      }
      .media-icons {
        width: 100%;
        padding: 0;
        padding-left: 35px;
      }
      .container-info-footer {
        gap: 35px;
        height: auto;
        max-width: 100%;
        flex-direction: column;
      }
    }
  `}
`
