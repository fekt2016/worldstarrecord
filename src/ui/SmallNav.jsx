/* eslint react/prop-types: 0 */
import styled, { css } from 'styled-components'
import NavItem from '../features/Navbar/NavItem'
import NavList from '../features/Navbar/NavList'

const SmallContainer = styled.div`
width: 100%;
  opacity: 0;
  height: 0;
  visibility: hidden;
  transition: all 0.1s ease-in;
  background-color: var(--color-primary-900);
  /* ${(props) =>
    props.pageType === 'appLayout' &&
    css`
      background-color: var(--color-primary-90);
    `} */

  ${(props) =>
    props.isOpen === true &&
    css`
      opacity: 1;
      visibility: visible;
      height: 20rem;
    `}
`
function SmallNav({ isOpen }) {
  return (
    <SmallContainer isOpen={isOpen}>
      <NavItem type={'small'}>
        <NavList to="/" text={'home'} mycolor={'var(--color-white-100)'} />
        <NavList
          to="about"
          text={'about us'}
          mycolor={'var(--color-white-100)'}
        />
        <NavList
          to="events"
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
  )
}

export default SmallNav
