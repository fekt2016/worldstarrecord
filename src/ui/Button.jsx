import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    font-size: 1.2rem;
  `,
  medium: css`
    font-size: 1.6rem;
  `,
  large: css`
    font-size: 2rem;
  `,
}
const variation = {
  primary: css`
    background-color: var(--color-gold-900);
    color: var(--color-white-100);
    &:hover {
      transform: scale(1.1);
    }
  `,
  secoundary: css`
    background-color: transparent;
    border: 1px solid var(--color-gold-900);
    color: var(--color-gold-900);
  `,
  tertiary: css`
    background-color: var(--color-white-100);
    border: 1px solid var(--color-primary-900);
    color: var(--color-primary-900);
    border-radius: 5px;

    &:hover {
      font-size: 1.5rem;
    }
  `,
}

const Button = styled.button`
  border: none;
  border-radius: 7px;
  text-transform: capitalize;
  padding: 1rem 2rem;
  transition: all 0.4s;

  ${(props) => sizes[props.size]}
  ${(props) => variation[props.variation]}
`

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
}

export default Button
