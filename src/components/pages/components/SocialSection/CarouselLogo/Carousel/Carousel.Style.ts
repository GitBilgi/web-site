import styled from 'styled-components'

export const LogosContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .logo-image {
    img {
      width: 19rem;
      height: 9.5rem;

      @media (max-width: 1035px) {
        width: 14rem;
        height: 7rem;
      }
    }

    @media (max-width: 768px) {
      width: 12rem;
      height: 5rem;
    }
    @media (max-width: 1035px) {
      margin: 0;
      padding: 0;
    }
  }
`
