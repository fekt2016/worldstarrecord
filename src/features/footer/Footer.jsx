import styled, { css } from 'styled-components'
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
  background-color: var(--color-grey-100);
  padding: 1rem;
  border-radius: 20px;
  margin: 1rem 1rem;
  color: var(--color-white-100);
  height: 25rem;
  border: 2px solid var(--color-black-900);

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
  margin: 1rem;
`
const StyledNav = styled.nav`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Icon = css`
  font-size: 3rem;
  transition: all 0.4s;
  cursor: pointer;
`
const FacebookIcon = styled(FaFacebook)`
  ${Icon}
  color:var(--color-facebook-900);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(64, 96, 164, 0.7);
  }
`
const TwitterIcon = styled(FaTwitter)`
  ${Icon}
  color:var(--color-twitter-900);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(109, 194, 247, 0.7);
  }
`
const TikTokIcon = styled(FaTiktok)`
  ${Icon}
  color:var(--color-tiktok-900);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(123, 255, 251, 0.7);
  }
`
const InstagramIcon = styled(FaInstagram)`
  ${Icon}
  color:var(--color-instragram-900);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(228, 112, 164, 0.7);
  }
`
const WhatsappIcon = styled(FaWhatsappSquare)`
  ${Icon}
  color:var(--color-whatsapp-900);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(104, 229, 151, 0.7);
  }
`
const YouTubeIcon = styled(FaYoutube)`
  ${Icon}
  color: var(--color-youtube-900);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2.4rem 3.2rem rgba(235, 121, 120, 0.7);
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Img src="../../../LOGO.jpeg" alt="footerLogo" />

      <NavBox>
        <StyledNav>
          <NavItem>
            <NavList text={'home'} mycolor="var(--color-black-900)" />
            <NavList text={'event'} mycolor="var(--color-black-900)" />
            <NavList text={'about'} mycolor="var(--color-black-900)" />
            <NavList text={'contact'} mycolor="var(--color-black-900)" />
          </NavItem>
        </StyledNav>
        {/* <NavItem>
          <NavList text={'Terms of service'} mycolor="var(--color-white-100)" />
          <NavList text={'Privacy policy '} mycolor="var(--color-white-100)" />
          <NavList text={'Cookie policy'} mycolor="var(--color-white-100)" />
          <NavList text={'Refund policy'} mycolor="var(--color-white-100)" />
        </NavItem> */}
        <Social>
          <FacebookIcon />
          <TwitterIcon />
          <TikTokIcon />
          <InstagramIcon />
          <WhatsappIcon />
          <YouTubeIcon />
        </Social>
        <P>&#169;copyright reserved 2024</P>
      </NavBox>
    </StyledFooter>
  )
}

export default Footer
