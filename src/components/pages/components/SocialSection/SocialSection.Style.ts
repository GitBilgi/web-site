import styled from 'styled-components'

export const SectionSocial = styled.div`
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

    @media (max-width: 1035px) {
      gap: 50px;
    }
  }
  .size {
    max-width: 146px;
    padding-right: 20px;
  }

  @media (max-width: 1035px) {
    flex-direction: column;

    .col1,
    .col2 {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`
