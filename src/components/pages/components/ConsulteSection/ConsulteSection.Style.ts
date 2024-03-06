import styled from 'styled-components'

export const ContainerConsulting = styled.div`
  .container {
    padding: 32px 80px 96px 80px;

    @media (max-width: 1035px) {
      padding: 32px;
    }
  }

  .content {
    display: flex;
    height: 316px;
    border-radius: 16px;
    flex-direction: column;
    background-color: #3d0424;
    padding-top: 64px;
    padding-left: 64px;
    gap: 40px;
  }
  .font {
    color: #fff;

    @media (max-width: 1035px) {
      font-size: 30px;
    }
  }

  .heading {
    max-width: 944px;
  }
  .buttons {
    display: flex;
    gap: 12px;
  }
`
