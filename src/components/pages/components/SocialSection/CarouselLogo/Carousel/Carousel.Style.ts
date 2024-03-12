import styled from 'styled-components'

export const LogosContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .logo-image {
    img {
      height: 5rem;
      width: 13rem;

      @media (max-width: 1200px) {
        width: 11.25rem;
        height: 12.5rem;
      }
    }
    @media (max-width: 1200px) {
      margin: 0;
      padding: 0;
    }
  }
`
