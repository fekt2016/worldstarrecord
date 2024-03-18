import styled from 'styled-components'
import NavList from '../Navbar/NavList'
import NavItem from '../Navbar/NavItem'
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaWhatsappSquare,
  FaYoutube,
} from 'react-icons/fa'

const StyledFooter = styled.footer`
  background-color: var(--color-black-900);
  padding: 1rem;
  border-radius: 20px;
  margin: 1rem 4rem;
  color: var(--color-white-100);
  height: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const NavBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const P = styled.p`
  font-size: 1.2rem;
`
const Img = styled.img`
  height: 5rem;
`
const Social = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const StyledNav = styled.nav`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
function Footer() {
  return (
    <StyledFooter>
      <Img src="../../../LOGO.jpeg" alt="footerLogo" />
      <Social>
        <FaFacebook />
        <FaTwitter />
        <FaTiktok />
        <FaInstagram />
        <FaWhatsappSquare />
        <FaYoutube />
      </Social>

      <NavBox>
        <StyledNav>
          <NavItem>
            <NavList text={'home'} mycolor="var(--color-white-100)" />
            <NavList text={'event'} mycolor="var(--color-white-100)" />
            <NavList text={'about'} mycolor="var(--color-white-100)" />
            <NavList text={'contact'} mycolor="var(--color-white-100)" />
          </NavItem>
        </StyledNav>
        <P>&#169;copyright reserved 2024</P>
      </NavBox>
    </StyledFooter>
  )
}

export default Footer
