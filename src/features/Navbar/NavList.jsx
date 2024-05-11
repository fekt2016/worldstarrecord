/* eslint react/prop-types: 0 */

import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLink = styled(NavLink)`
  text-transform: capitalize;
  padding: 0.15rem 0.35rem;
  border: 1px solid transparent;
  font-size: 2rem;
  font-family: 'Passion One', sans-serif;
  font-weight: 700;
  font-style: normal;

  color: ${(props) => props.mycolor};
  ${(props) =>
    props.active === 'active' &&
    css`
      color: var(--color-primary-900);
      transition: all 0.2s ease;
    `}
  &:hover {
    border: 1px solid var(--color-primary-900);
  }
`

function NavList({ text, active = '', mycolor, to }) {
  return (
    <li>
      <StyledLink active={active} to={to} mycolor={mycolor}>
        {text}
      </StyledLink>
    </li>
  )
}

export default NavList
