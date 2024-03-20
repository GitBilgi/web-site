import styled from 'styled-components'

export const SectionFeatures = styled.div`
  display: flex;
  max-width: 100%;
  padding-bottom: 96px;
  flex-direction: column;

  .inteligence {
    display: flex;
    max-width: 100%;
    padding-top: 96px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1035px) {
      padding-right: 0;
    }
    @media (max-width: 768px) {
      text-align: start;
      padding-left: 10px;
    }
  }

  .text {
    gap: 20px;
    display: flex;
    max-width: 1280px;
    padding-right: 410px;
    flex-direction: column;

    .subtitle {
      color: #80162a;
      max-width: 800px;
    }
    .heading {
    }
    .paragraph {
      width: 100%;
    }

    @media (max-width: 1035px) {
      padding: 10px;
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

        @media (max-width: 768px) {
          height: 100%;
          padding: 20px;
        }
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

        @media (max-width: 768px) {
          padding-top: 48px;
          padding-bottom: 20px;
        }
      }

      .buttonlink {
        gap: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      @media (max-width: 768px) {
        height: auto;
      }
    }
    @media (max-width: 1035px) {
      width: 100%;
      flex-direction: column;
    }
    @media (max-width: 768px) {
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
`
