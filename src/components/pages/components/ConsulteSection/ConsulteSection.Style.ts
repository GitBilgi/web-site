import styled, { css } from 'styled-components'

export const ContainerConsulting = styled.div`
  ${props => css`
    .container {
      padding: 32px 80px 96px 80px;

      @media (max-width: 1035px) {
        padding: 32px;
      }
    }

    .content {
      gap: 40px;
      height: 316px;
      display: flex;
      padding-top: 64px;
      padding-left: 64px;
      border-radius: 16px;
      flex-direction: column;

      background-color: ${props.theme.colors.gray.gray_900};

      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        padding: 30px;
        align-items: center;
        justify-content: center;
      }
    }
    .font {
      color: ${props.theme.colors.base.white};

      @media (max-width: 1035px) {
        width: 100%;
        font-size: 30px;
      }
    }

    .heading {
      max-width: 944px;
    }
    .buttons {
      gap: 12px;
      display: flex;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    @media (max-width: 768px) {
      height: 100%;

      .container {
        padding: 64px 16px;
      }
    }
  `}
`
