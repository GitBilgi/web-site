// import { rgba } from 'polished'
import styled, { css } from 'styled-components'

interface Props {
  styles: 'primary' | 'secondary' | 'tertiary'
  button_size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  mode?: 'square'
  display?: 'block'
}

export const Wrapper = styled.div<Omit<Props, 'button_size'>>`
  ${props => css`
    ${props.display !== 'block' &&
    css`
      width: fit-content;
    `}

    &:focus-within {
      button {
        ${props.styles === 'primary' &&
        css`
          &:not([disabled]) {
            background-color: ${props.theme.colors.primary.primary_500};
            color: ${props.theme.colors.base.white};
          }
        `}
      }
    }
  `}
`

export const Container = styled.button<Props>`
  ${props => css`
    background-color: transparent;
    border-color: transparent;
    border-radius: ${props.theme.border.radius.sm};
    border-width: ${props.theme.border.width.hairline};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1.5rem;

    ${props.button_size === 'sm' &&
    css`
      ${props.mode === 'square'
        ? css`
            width: 3.6rem;
            height: 3.6rem;
          `
        : css`
            width: 16.6rem;
            height: 3.6rem;
          `}
    `}

    ${props.display === 'block' &&
    css`
      width: 100%;
    `}

    span {
      margin-right: 0.5rem;
    }

    div {
      font-family: ${props.theme.font.family.base};
      font-size: ${props.theme.font.size.text.sm};
      font-weight: ${props.theme.font.weight.regular};
    }

    transition: background-color 250ms ease;

    ${props.styles === 'primary' &&
    css`
      background-color: ${props.theme.colors.primary.primary_500};
      color: ${props.theme.colors.base.white};
    `}
  `}
`
