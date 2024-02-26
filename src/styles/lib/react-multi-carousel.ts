'use client'

import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${props => css`
    .react-multi-carousel-dot {
      button {
        background-color: ${props.theme.colors.primary.primary_100};
        border-color: ${props.theme.colors.primary.primary_100};
        height: 0.5rem;
        width: 0.5rem;
      }

      &.active {
        button {
          background-color: ${props.theme.colors.base.black};
          border-color: ${props.theme.colors.base.black};
        }
      }
    }
  `}
`
