import styled from 'styled-components'

export const ContainerFeatures = styled.div`
  gap: 64px;
  width: 100%;
  display: flex;
  padding: 64px 80px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f9fafb;

  .text-content {
    gap: 24px;
    display: flex;
    max-width: 592px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .icon {
    width: 56px;
    height: 56px;
    display: flex;
    border-radius: 28px;
    align-items: center;
    justify-content: center;
    background-color: #f8d7cf;
    border: 10px solid #fff3f0;

    .content-icon {
      display: flex;
      border-radius: 28px;
    }
    .icon-customise {
      display: flex;
      border-radius: 28px;
    }
  }

  .container-card {
    gap: 32px;
    display: flex;
    flex-direction: column;
  }

  .card-content {
    gap: 73px;
    display: flex;
    max-width: 384px;
    padding-top: 24px;
    padding-left: 24px;
    padding-bottom: 44px;
    flex-direction: column;
    background-color: #fff;
  }

  .card {
    gap: 32px;
    border: none;
    display: flex;
    flex-direction: row;
    background-color: #f9fafb;
  }
  .icon1 {
    width: 48px;
    height: 48px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #80162a;

    .text-card {
      display: flex;
    }
    .paragraph {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    padding-top: 64px;
    padding-bottom: 64px;
    height: 100%;

    .text-content {
      padding-left: 16px;
      padding-right: 16px;
    }

    .text-card {
      gap: 10px;
      display: flex;
      flex-direction: column;
    }
    .card {
      height: 100%;
      padding-left: 16px;
      padding-right: 16px;
      flex-direction: column;
    }
  }
`
