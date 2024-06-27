/* eslint react/prop-types: 0 */

import NavList from './NavList'
import NavItem from './NavItem'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { devicesMax } from '../../styles/BreakPoint'
import SmallNav from '../../ui/SmallNav'
import { Link } from 'react-router-dom'

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
  color: ${(props) =>
    props.type === 'home'
      ? 'var(--color-white-100)'
      : 'var(--color-black-900)'};
  @media ${devicesMax.md} {
    display: block;
  }
`
const CloseIcon = styled(AiOutlineClose)`
  font-size: 2.3rem;
  cursor: pointer;
  display: none;
  color: ${(props) =>
    props.type === 'home'
      ? 'var(--color-white-100)'
      : 'var(--color-black-900)'};
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
          <Link to={'/'} className="navbar-brand">
            <Img src="../../../LOGO.jpeg" alt="logo" />
          </Link>
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
              to="events"
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
            type={type}
            onClick={() => {
              setIsOpen(true)
            }}
          />
        ) : (
          <CloseIcon
            type={type}
            onClick={() => {
              setIsOpen(false)
            }}
          />
        )}
      </BigContainer>
      <SmallNav isOpen={isOpen} pageType={type} />
    </NavStyle>
  )
}

export default NavBar
