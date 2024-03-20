import styled from 'styled-components'

export const SectionFaq = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .text {
    gap: 20px;
    display: flex;
    padding-top: 64px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    width: 100%;
    padding-top: 64px;
    padding-bottom: 96px;
  }

  .container-faqitem {
    display: flex;
    padding-left: 80px;
    padding-right: 80px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  @media (max-width: 768px) {
    height: 100%;

    .subtitle {
      text-align: center;
      padding-left: 25px;
      padding-right: 25px;
    }
  }
`
