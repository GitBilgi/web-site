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
  flex-direction: column;
  padding-bottom: 96px;

  .inteligence {
    display: flex;
    align-items: center;
    padding-left: 348px;
    padding-top: 96px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;

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
  }

  .container-cards {
    gap: 32px;
    display: flex;
    padding-top: 64px;
    align-items: center;
    justify-content: center;

    .cards {
      width: 384px;
      height: 512px;
      background-color: #f9fafb;

      .feature-text {
        padding-top: 24px;
        padding-left: 24px;
      }

      .feature-icon {
        width: 48px;
        height: 48px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background-color: #80162a;
      }

      .heading-feature {
        gap: 8px;
        display: flex;
        padding-top: 64px;
        padding-bottom: 146px;
        flex-direction: column;
      }

      .buttonlink {
        gap: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
`

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

export const SectionMap = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  }
  .heading-xxs {
    color: #80162a;
  }

  .maps {
    width: 1283px;
    height: 402px;
    border: solid 1px #333;
  }
`
export const SectionSupport = styled.div`
  width: 100%;
  height: 534px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .content {
    width: 1280px;
    height: 342px;
    align-items: center;
    justify-content: center;
  }
  .text {
    width: 100%;
    display: flex;
    text-align: center;
    padding-left: 28px;
    padding-right: 28px;
    align-items: center;
    justify-content: center;
  }
  .avaliations {
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    gap: 16px;
  }
  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
