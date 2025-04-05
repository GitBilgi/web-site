import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 54px;
  align-items: center;
  padding-bottom: 54px;
  flex-direction: column;
  justify-content: center;

  .container {
    width: 100%;
    height: 580px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 42px 80px 72px 80px;

    .subtitle {
      color: #80162a;
      max-width: 320px;
      padding: 4px 12px;
      border-radius: 16px;
      background-color: #fff3f0;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .content {
      gap: 24px;
      width: 592px;
      height: 244px;
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .buttons {
      gap: 12px;
      display: flex;
      padding-top: 48px;

      @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        flex-direction: column;
      }
    }

    .integrations {
      gap: 12px;
      display: flex;
      padding-top: 48px;
      flex-direction: column;

      .apps {
        gap: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 1035px) {
      gap: 40px;
      width: 100%;
      height: auto;
      display: flex;
    }
    @media (max-width: 768px) {
      padding: 0;
      height: auto;
      padding-top: 50px;
    }
  }

  .image-background {
    z-index: -1;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  .image-background-mobile {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1035px) {
    .image-background-mobile {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .image {
      max-width: 1035px;
    }
  }

  .logoIXC {
    width: 26px;
    height: 26px;
  }
  .logoIOB {
    width: 45px;
    height: 15px;
  }
  .logosci {
    width: 32px;
    height: 32px;
  }
`
