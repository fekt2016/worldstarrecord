/* eslint react/prop-types: 0 */

import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLink = styled(NavLink)`
  text-transform: capitalize;
  padding: 0.15rem 0.35rem;
  border: 1px solid transparent;
  color: ${(props) => props.mycolor};
  ${(props) =>
    props.active === 'active' &&
    css`
      background-color: var(--color-primary-900);
      color: #fff;
      transition: all 0.2s ease;
    `}
  &:hover {
    border: 1px solid var(--color-primary-900);
  }
`

function NavList({ text, active = '', mycolor }) {
  return (
    <li>
      <StyledLink active={active} to="#" mycolor={mycolor}>
        {text}
      </StyledLink>
    </li>
  )
}

export default NavList
