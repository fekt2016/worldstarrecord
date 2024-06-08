import styled, { css } from 'styled-components'

const NavItem = styled.ul`
  display: flex;
  justify-content: space-evenly;
  ${(props) =>
    props.type === 'home' &&
    css`
      flex: 3;

      transition: all 0.3s ease;
    `}
  ${(props) =>
    props.type === 'footer' &&
    css`
      justify-content: space-evenly;
    `}
    ${(props) =>
      props.type === 'small' &&
      css`
        flex-direction: column;
        height: 100%;
      `}
`

export default NavItem
