import { css, styled } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Input = styled.input`
  border: 1px solid var(--color-gray-700);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  flex-basis: 50rem;
  ${(props) => props.type === 'radio' && css``}

  @media ${devicesMax.md} {
    width: 100%;
    flex-basis: auto;
  }
`
export default Input
