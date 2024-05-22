/* eslint react/prop-types: 0 */

import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    text-transform: capitalize;
    padding: 0.15rem 0.35rem;
    font-size: 2rem;
    font-family: 'arial';
    font-weight: 700;
    font-style: normal;
    position: relative;
    color: ${(props) => props.mycolor};
  }
  /* &.active {
    ${(props) =>
      props.active &&
      css`
        color: gold;
      `};
  } */

  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 0;
    height: 2px;
    width: 0;
    background-color: gold;
    transition: all 0.8s;
  }

  &:hover:before {
    width: 100%;
  }
`

function NavList({ text, mycolor, active = '', to }) {
  return (
    <li>
      <StyledLink active={active} to={to} mycolor={mycolor}>
        {text}
      </StyledLink>
    </li>
  )
}

export default NavList
