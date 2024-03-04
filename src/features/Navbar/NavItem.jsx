import styled, { css } from 'styled-components'

const NavList = styled.ul`
  flex: 4;
  display: flex;
  justify-content: space-evenly;
  transition: all 0.3s ease;

  ${(props) =>
    props.show &&
    css`
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 15px;
      margin: 15px;
    `}
`

export default NavList
