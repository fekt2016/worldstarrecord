import styled from 'styled-components'
import NavList from '../Navbar/NavList'
import NavItem from '../Navbar/NavItem'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const P = styled.p`
  font-size: 1.2rem;
`
function Footer() {
  return (
    <StyledFooter>
      {/* <img src="" alt="footerLogo" /> */}
      <div>narbert</div>
      <NavBox>
        <nav>
          <NavItem>
            <NavList text={'home'} mycolor="var(--color-white-100)" />
            <NavList text={'event'} mycolor="var(--color-white-100)" />
            <NavList text={'about'} mycolor="var(--color-white-100)" />
            <NavList text={'contact'} mycolor="var(--color-white-100)" />
          </NavItem>
        </nav>
        <P>&#169;copyright reserved 2024</P>
      </NavBox>
    </StyledFooter>
  )
}

export default Footer
