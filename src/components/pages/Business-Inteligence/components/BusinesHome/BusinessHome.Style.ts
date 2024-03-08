import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 100%;
  max-height: 792px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .container1 {
    width: 100%;
    display: flex;
    padding-left: 112px;
    padding-top: 128px;
    padding-bottom: 128px;
    flex-direction: column;
  }

  .container2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .content {
    gap: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .paragraph {
      max-width: 480px;
      padding-top: 24px;
    }
    .title {
      height: 100%;
      font-size: 60px;
      line-height: 7rem;
      max-width: 544px;
    }
  }
  .subtitle {
    display: flex;
    color: #80162a;
    max-width: 250px;
    padding: 4px 12px;
    border-radius: 16px;
    background-color: #fff3f0;
    align-items: center;
    justify-content: center;
  }
  .buttons {
    gap: 12px;
    display: flex;
    padding-top: 48px;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  }

  .extra {
    gap: 4px;
    width: 100%;
    display: flex;
    padding-top: 48px;
    flex-direction: column;
  }

  .extra-infos {
    gap: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .container2 {
    width: 100%;
    display: flex;
    background-color: #f2f4f7;
  }

  .container2-mobile {
    width: 100%;
    height: 375px;
    display: flex;
    background-color: #f2f4f7;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;

    .content {
      gap: 16px;
      .title {
        font-size: 36px;
        line-height: 4.4rem;
      }
      .paragraph {
        padding: 0;
      }
    }

    .container1 {
      padding: 0;
      padding-bottom: 64px;
      padding-top: 64px;
      padding-left: 16px;
      padding-right: 16px;
    }
    .buttons {
      width: 100%;

      .button {
        width: 350px;
      }
    }
  }
`
