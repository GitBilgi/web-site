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
    flex-direction: column;
    justify-content: center;
  }
  .content-container {
    max-width: 768px;
    height: 512px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    border: solid 4px #98a2b3;

    .imagem {
      max-width: 757px;
      height: 502px;
      border-radius: 10px;
    }

    .div-button {
      padding-top: 64px;
    }

    @media (max-width: 768px) {
      width: 100%;
      .imagem {
        width: 100%;
      }
    }
  }
  .card-container {
    gap: 32px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1035px) {
      gap: 70px;
      display: flex;
      padding-top: 64px;
      padding-bottom: 200px;
      flex-direction: column;
    }
  }
  .cards {
    gap: 20px;
    width: 384px;
    height: 178px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .feature-icon {
    width: 40px;
    height: 80px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: solid 8px #fff3f0;

    .content-icon {
      width: 30px;
      display: flex;
      align-items: center;
      border-radius: 28px;
      justify-content: center;
      background-color: #f8d7cf;
    }
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  .feature-paragraph {
    width: 340px;
    display: flex;
  }
`
