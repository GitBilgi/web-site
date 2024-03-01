'use client'

import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${props => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    .heading {
      padding-bottom: 16px;
    }

    .container-info-footer {
      gap: 48px;
      width: 1280px;
      height: 132px;
      display: flex;
      justify-content: center;
      padding: 0px, 32px, 0px, 32px;
    }

    .ContainerFooter {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 64px 320px 48px;

      @media (max-width: 1035px) {
        width: 100%;
        height: auto;
        padding: 40px;
        justify-content: center;
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
    }
    .direitos {
      display: flex;
      gap: ${props.theme.spacing.spacing_8};

      @media (max-width: 1035px) {
        padding-right: 32px;
        justify-content: center;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    .media-icons {
      display: flex;
      gap: ${props.theme.spacing.spacing_6};
    }

    @media (max-width: 768px) {
      width: 768px;
      flex-direction: column;
      justify-content: center;
    }
  `}

  @media (max-width:768px) {
    display: none;
  }
`
