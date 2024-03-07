import styled from 'styled-components'

export const ContainerConsulting = styled.div`
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
    background-color: #3d0424;

    @media (max-width: 768px) {
      padding: 30px;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
  .font {
    color: #fff;

    @media (max-width: 1035px) {
      width: 100%;
      font-size: 30px;
    }
  }

  .heading {
    max-width: 944px;
  }
  .buttons {
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`
