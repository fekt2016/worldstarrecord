/* eslint react/prop-types: 0 */

import NavList from './NavList'
import NavItem from './NavItem'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react'
import { devicesMax } from '../../styles/BreakPoint'

const NavStyle = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  padding: 1rem 2rem;
  padding-right: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`

const NavCollapse = styled.div`
  flex: 1;
  transition: all 0.3s ease;

  @media ${devicesMax.md} {
    display: none;
  }
`
const BigContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SmallContainer = styled.div`
  opacity: 0;
  height: 0;
  transition: all 0.4s ease-in;

  ${(props) =>
    props.isOpen === true &&
    css`
      opacity: 1;
      height: 20rem;
    `}
`
const NavLogo = styled.div`
  flex: 1;
`
const Img = styled.img`
  height: 4rem;
`
const MenuIcon = styled(AiOutlineMenu)`
  font-size: 2.3rem;
  display: none;
  cursor: pointer;
  color: var(--color-white-100);
  @media ${devicesMax.md} {
    display: block;
  }
`
const CloseIcon = styled(AiOutlineClose)`
  font-size: 2.3rem;
  cursor: pointer;
  display: none;
  color: var(--color-white-100);
  @media ${devicesMax.md} {
    display: block;
  }
`
function NavBar({ type }) {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (width > 886) setIsOpen(false)
  }, [width])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <NavStyle>
      <BigContainer>
        <NavLogo>
          <a href="#" className="navbar-brand">
            <Img src="../../../LOGO.jpeg" alt="logo" />
          </a>
        </NavLogo>

        <NavCollapse>
          <NavItem type={type}>
            <NavList
              to="/"
              text={'home'}
              mycolor={type === 'home' ? 'gold' : 'var(--color-black-900)'}
            />
            <NavList
              to="about"
              text={'about us'}
              mycolor={type === 'home' && 'var(--color-white-100)'}
            />
            <NavList
              to="event"
              text={'events'}
              mycolor={type === 'home' && 'var(--color-white-100)'}
            />
            <NavList
              to="gallery"
              text={'gallery'}
              mycolor={type === 'home' && 'var(--color-white-100)'}
            />
            <NavList
              to="contact"
              text={'contact'}
              mycolor={type === 'home' && 'var(--color-white-100)'}
            />
          </NavItem>
        </NavCollapse>

        {!isOpen ? (
          <MenuIcon
            onClick={() => {
              setIsOpen(true)
            }}
          />
        ) : (
          <CloseIcon
            onClick={() => {
              setIsOpen(false)
            }}
          />
        )}
      </BigContainer>
      <SmallContainer isOpen={isOpen}>
        <NavItem type={'small'}>
          <NavList to="home" text={'home'} mycolor={'var(--color-white-100)'} />
          <NavList
            to="about"
            text={'about us'}
            mycolor={'var(--color-white-100)'}
          />
          <NavList
            to="event"
            text={'events'}
            mycolor={'var(--color-white-100)'}
          />
          <NavList
            to="gallery"
            text={'gallery'}
            mycolor={'var(--color-white-100)'}
          />
          <NavList
            to="contact"
            text={'contact'}
            mycolor={'var(--color-white-100)'}
          />
        </NavItem>
      </SmallContainer>
    </NavStyle>
  )
}

export default NavBar
