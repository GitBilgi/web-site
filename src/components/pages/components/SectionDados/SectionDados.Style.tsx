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
    width: 1280px;
    height: 212px;
    display: flex;
    padding-top: 128px;
    align-items: center;
    justify-content: center;
  }

  .potencial {
    padding-top: 16px;
    padding-bottom: 20px;
  }

  .content-text {
    width: 768px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
    width: 100%;
    height: 910px;
    display: flex;
    align-items: center;
    gap: 64px;
    justify-content: center;
    flex-direction: column;
  }
  .content-container {
    width: 768px;
    height: 512px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    border: solid 4px #98a2b3;

    .imagem {
      width: 757px;
      height: 502px;
      border-radius: 10px;
    }

    .div-button {
      padding-top: 64px;
    }
  }
  .card-container {
    gap: 32px;
    width: 100%;
    height: 178px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cards {
    gap: 20px;
    width: 384px;
    height: 178px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 80px;
    border: solid 8px #fff3f0;

    .content-icon {
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 28px;
      background-color: #f8d7cf;
    }
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  .feature-paragraph {
    display: flex;
    width: 340px;
  }
`
