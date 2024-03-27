import styled from 'styled-components'

export const SectionDados = styled.div`
  width: 100%;
  display: flex;
  height: 1442px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f9fafb;

  .text {
    height: 100%;
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
    display: flex;
    max-width: 768px;
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
    padding-bottom: 70px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      gap: 48px;
      height: auto;
      padding-top: 64px;
    }
  }
  .content-container {
    display: flex;
    height: 750px;
    max-width: 1000px;
    align-items: center;
    justify-content: center;

    .image {
      max-width: 1100px;
      max-height: 700px;
    }

    .div-button {
      padding-top: 64px;
    }

    iframe {
      width: 1100px;
      height: 690px;
    }

    @media (max-width: 768px) {
      height: 100%;
      max-width: 390px;
      padding-left: 10px;
      padding-right: 10px;

      .image {
        width: 100%;
        display: flex;
        max-height: 100%;
      }
      iframe {
        height: 270px;
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`
