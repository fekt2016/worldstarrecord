import styled, { css } from 'styled-components'

const Form = styled.form`
  width: 50rem;
  /* margin: 1rem; */
  padding: 2rem;

  ${(props) =>
    props.type === 'send' &&
    css`
      border: 1px solid var(--color-grey-100);
      width: 100%;
    `}
`
export default Form
