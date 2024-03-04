'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 54px;
  padding-bottom: 54px;
  align-items: center;
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
      width: 320px;
      color: #80162a;
      padding: 4px 12px;
      border-radius: 16px;
      background-color: #fff3f0;
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
    }

    .buttons {
      gap: 12px;
      display: flex;
      padding-top: 48px;
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
    }
  }
  .image-background {
    z-index: -1;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }
`

export const SocialSection = styled.div`
  gap: 32px;
  width: 100%;
  height: 296px;
  display: flex;
  padding: 96px 80px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f9fafb;

  .logos {
    gap: 35.4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
export const SectionFeatures = styled.div`
  width: 100%;
  display: flex;

  .text {
    padding-left: 80px;
  }
  .subtitle {
    width: 800px;
    color: #80162a;
  }
  .heading {
    width: 800px;
  }
  .paragraph {
    width: 100%;
  }
`
