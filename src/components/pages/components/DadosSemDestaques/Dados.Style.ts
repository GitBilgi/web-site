import styled from 'styled-components'

export const SectionDados = styled.div`
  width: 100%;
  height: 1442px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f9fafb;

  .text {
    height: 212px;
    display: flex;
    max-width: 1280px;
    padding-top: 128px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      height: 100%;
      padding-top: 64px;
    }
  }

  .potencial {
    padding-top: 16px;
    padding-bottom: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .content-text {
    max-width: 768px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      max-width: 100%;

      .analise {
        max-width: 100%;
        line-height: 3.8rem;
      }
    }
  }
  .demonstration {
    width: 122px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff3f0;

    .paragraph {
      color: #80162a;
    }
  }

  .container {
    gap: 64px;
    width: 100%;
    height: 910px;
    display: flex;
    align-items: center;
    padding-bottom: 64px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      height: auto;
      padding-top: 64px;
      gap: 48px;
    }
  }

  .content-container {
    max-width: 768px;
    height: 512px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;

    .image {
      max-width: 757px;
      max-height: 502px;
      border-radius: 10px;
    }

    .div-button {
      padding-top: 64px;
    }

    @media (max-width: 768px) {
      max-width: 390px;
      height: 100%;
      padding-left: 10px;
      padding-right: 10px;

      .image {
        display: flex;
        width: 100%;
        max-height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`
