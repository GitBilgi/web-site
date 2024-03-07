import styled from 'styled-components'

export const SectionMap = styled.div`
  gap: 64px;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .header {
    gap: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      .heading {
        font-size: 36px;
        text-align: center;
      }
    }
  }
  .heading-xxs {
    color: #80162a;
  }

  .maps {
    max-width: 1283px;
    height: 402px;
    border: solid 1px #333;

    @media (max-width: 1035px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 400px;
    }
  }
`
