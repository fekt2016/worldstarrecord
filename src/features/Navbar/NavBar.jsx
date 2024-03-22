import { useEffect, useState } from 'react'
import NavList from './NavList'
import NavItem from './NavItem'
import { devicesMax } from '../../styles/BreakPoint'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Sign from './SIgn'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa'

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  ${(props) =>
    props.show &&
    css`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    `}
`

const NavCollapse = styled.div`
  flex: 1;

  transition: all 0.3s ease;

  ${(props) =>
    props.show &&
    css`
      width: 100%;
    `}
`
const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s ease;
  ${(props) =>
    props.show &&
    css`
      width: 100%;
      flex-direction: column;
    `}
`
const NavLogo = styled.div`
  @media ${devicesMax.md} {
    padding: 0 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Img = styled.img`
  height: 4rem;
`
const Cart = styled(Link)`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`
const IconBox = styled.div`
  background-color: orangered;
  padding: 1rem;
  border-radius: 100%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

function NavBar() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  })

  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth

      windowWidth > 850 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false })
      windowWidth < 885 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true })
    }
  }, [])
  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  }
  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    })
  }

  return (
    <NavStyle show={showElement.navOpened}>
      <NavLogo>
        <a href="#" className="navbar-brand">
          <Img src="../../../LOGO.jpeg" alt="logo" />
        </a>
        {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
        {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
      </NavLogo>
      <NavCollapse show={showElement.navOpened}>
        {showElement.navbarNav ? (
          <NavBox show={showElement.navOpened}>
            <NavItem show={showElement.navOpened}>
              <NavList
                to="/"
                text={'home'}
                active="active"
                mycolor="var(--color-primary-900)"
              />
              <NavList to="event" text={'event'} />
              <NavList to="about" text={'about'} />
              <NavList to="contact" text={'contact'} />
            </NavItem>
            <Cart to={`dashboard/cart`}>
              <IconBox>
                <FaShoppingCart />
              </IconBox>
              cart
            </Cart>
            <Sign className="sign">
              <Link className="link reg">Login</Link>
              <Link className="link reg">Register</Link>
            </Sign>
          </NavBox>
        ) : null}
      </NavCollapse>
    </NavStyle>
  )
}

export default NavBar
