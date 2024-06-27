/* eslint react/prop-types: 0 */
import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import NavBar from '../features/Navbar/NavBar'
import Button from '../ui/Button'

const StyledHeader = styled.header`
  margin-bottom: 6rem;
  ${(props) =>
    props.type === 'home' &&
    css`
      height: 100vh;
      width: 100vw;
      background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.52),
          rgba(0, 0, 0, 0.73)
        ),
        url('../../image18.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media ${devicesMax.md} {
        height: 100vh;
        /* padding-top: 8rem; */
      }
    `}
`
const Heading = styled.h1`
  font-size: 10rem;
  color: var(--color-white-100);

  @media ${devicesMax.lg} {
    font-size: 10rem;
  }
  @media ${devicesMax.md} {
    font-size: 8rem;
  }
  @media ${devicesMax.sm} {
    font-size: 3rem;
  }
`
const TextBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devicesMax.md} {
    width: 70%;
  }
  @media ${devicesMax.md} {
    width: 80%;
  }
`
const P = styled.p`
  font-size: 1.8rem;
  color: var(--color-white-100);
  text-align: center;
  margin-bottom: 8rem;
  hyphens: none;

  @media ${devicesMax.sm} {
    font-size: 1.4rem;
  }
`
const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const BtnBox = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: flex-start;

  @media ${devicesMax.sm} {
    padding-left: 5rem;
  }
`
function Header({ type }) {
  return (
    <StyledHeader type={type}>
      <NavBar type={type} />
      {type === 'home' ? (
        <TextContainer>
          <TextBox>
            <Heading>World star Records Ltd</Heading>
            <P>
              We create a platform for musicians across the world to participate
              and connect to the international music festival
            </P>
          </TextBox>
          <BtnBox>
            <Button to={'gallery'} size="large">
              gallery
            </Button>
            <Button to={'events'} size="large" variation="secoundary">
              events
            </Button>
          </BtnBox>
        </TextContainer>
      ) : (
        ''
      )}
    </StyledHeader>
  )
}

export default Header
