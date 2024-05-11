import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
// import { devicesMax } from '../styles/BreakPoint'

const Section = styled.section`
  padding: 4rem 0;

  ${(props) =>
    props.type === 'event' &&
    css`
      padding: 2rem 20rem;

      @media ${devicesMax.md} {
        padding: 2rem 2rem;
      }
    `}
  ${(props) =>
    props.type === 'video' &&
    css`
      height: 80rem;
      padding: 0 2rem;
    `}
    ${(props) =>
      props.type === 'msg' &&
      css`
        margin: 0 6rem;
      `}
`

export default Section
