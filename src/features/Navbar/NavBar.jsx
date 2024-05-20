/* eslint react/prop-types: 0 */
import { useEffect, useState } from 'react'
import NavList from './NavList'
import NavItem from './NavItem'
import { devicesMax } from '../../styles/BreakPoint'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import Sign from './SIgn'
import styled, { css } from 'styled-components'
// import { Link } from 'react-router-dom'

// import { FaShoppingCart } from 'react-icons/fa'

const NavStyle = styled.nav`
  display: flex;
  width: 100vw;
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
  flex: 1;
  @media ${devicesMax.md} {
    padding: 0 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: none;
  }
`
const Img = styled.img`
  height: 4rem;
`
const MenuIcon = styled(AiOutlineMenu)`
  font-size: 2.3rem;
  cursor: pointer;
`
const CloseIcon = styled(AiOutlineClose)`
  font-size: 2.3rem;
  cursor: pointer;
`
function NavBar({ type }) {
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
        {showElement.hamburgerIcon && <MenuIcon onClick={openNav} />}
        {showElement.closeIcon && <CloseIcon onClick={closeNav} />}
      </NavLogo>
      <NavCollapse show={showElement.navOpened}>
        {showElement.navbarNav ? (
          <NavBox show={showElement.navOpened}>
            <NavItem show={showElement.navOpened}>
              <NavList to="/" text={'home'} active="active" />
              <NavList
                to="about"
                text={'about us'}
                mycolor={type === 'home' ? 'var(--color-white-100)' : 'black'}
              />
              <NavList
                to="event"
                text={'events'}
                mycolor={type === 'home' ? 'var(--color-white-100)' : 'black'}
              />
              <NavList
                to="gallery"
                text={'gallery'}
                mycolor={type === 'home' ? 'var(--color-white-100)' : 'black'}
              />
              <NavList
                to="contact"
                text={'contact'}
                mycolor={type === 'home' ? 'var(--color-white-100)' : 'black'}
              />
            </NavItem>
          </NavBox>
        ) : null}
      </NavCollapse>
    </NavStyle>
  )
}

export default NavBar
