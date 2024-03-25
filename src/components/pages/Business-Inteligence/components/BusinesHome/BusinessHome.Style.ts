'use client'

import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  max-height: 792px;
  flex-direction: row;
  justify-content: center;

  .container1 {
    width: 100%;
    display: flex;
    padding-top: 128px;
    padding-left: 112px;
    padding-bottom: 128px;
    flex-direction: column;
  }

  .container2 {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
      max-width: 544px;
      line-height: 7rem;
    }
  }
  .subtitle {
    display: flex;
    color: #80162a;
    max-width: 250px;
    padding: 4px 12px;
    border-radius: 16px;
    align-items: center;
    background-color: #fff3f0;
    justify-content: center;
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
    height: 100%;
    display: flex;
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
      padding-top: 64px;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 64px;
    }
    .buttons {
      width: 100%;

      .button {
        width: 350px;
      }
    }
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: bottom left;
  background-image: url('img/BI.jpg');
`
export const ImageContainer2 = styled.div`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  background-image: url('img/BI.jpg');
`
