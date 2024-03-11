import styled from 'styled-components'

export const ContainerSupport = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .container1 {
    width: 100%;
    display: flex;
    padding-left: 112px;
    padding-top: 190px;
    padding-bottom: 128px;
    flex-direction: column;
  }
  .content {
    gap: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .content1 {
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .textarea {
    gap: 8px;
    display: flex;
  }
  .paragraph {
    max-width: 488px;
  }

  .content-icon {
    width: 56px;
    display: flex;
    border-radius: 28px;
    align-items: center;
    justify-content: center;
    background-color: #f8d7cf;
    border: 10px solid #fff3f0;

    .icon-customise {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .content2 {
    gap: 20px;
    display: flex;
    padding-top: 64px;
    flex-direction: column;
    justify-content: flex-end;
  }

  .container2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .button {
    display: flex;
    padding-top: 166px;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
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
    }

    .container1 {
      padding: 0;
      padding-bottom: 64px;
      padding-top: 64px;
      padding-left: 16px;
      padding-right: 16px;
    }
    .paragraph {
      font-size: 16px;
    }
    .size {
      display: flex;
      width: 20px;
    }
    .button {
      padding-top: 100px;
    }
  }
`
