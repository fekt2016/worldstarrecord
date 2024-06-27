import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
// import { devicesMax } from '../styles/BreakPoint'

const Section = styled.section`
  padding: 4rem 0;

  ${(props) =>
    props.type === 'event' &&
    css`
    margin: 0rem 6rem;
      /* padding: 2rem 10rem; */

      /* @media ${devicesMax.md} {
        padding: 2rem 2rem;
      } */
    `}
  ${(props) =>
    props.type === 'video' &&
    css`
      height: 80rem;
      padding: 0 2rem;
      margin-bottom: 6rem;
      margin-top: 6rem;
    `}
    ${(props) =>
      props.type === 'msg' &&
      css`
        margin: 0 6rem;
      `}

${(props) =>
  props.type === 'pic' &&
  css`
    background-color: gold;
    /* height: 50rem; */
  `}
`

export default Section
