import styled, { css } from 'styled-components'

export const ContainerLogo = styled.div`
  ${props => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .book-image {
      img {
        height: 13.75rem;
        width: 12.5rem;
        border-radius: ${props.theme.border.radius.sm};

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
  `}
`
