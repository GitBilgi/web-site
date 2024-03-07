import styled from 'styled-components'

export const SectionFaq = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 64px;
    gap: 20px;
  }

  .container {
    width: 100%;
    padding-top: 64px;
    padding-bottom: 96px;
  }

  .container-faqitem {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 80px;
    padding-left: 80px;

    @media (max-width: 768px) {
      padding-right: 16px;
      padding-left: 16px;
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
