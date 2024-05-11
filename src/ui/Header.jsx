import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const StyledHeader = styled.header`
  height: 90vh;
  width: 100vw;

  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url('../../world3.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devicesMax.md} {
    height: 70vh;
    padding-top: 8rem;
  }
`
const Heading = styled.h1`
  font-size: 12rem;
  color: var(--color-white-100);

  @media ${devicesMax.lg} {
    font-size: 10rem;
  }
  @media ${devicesMax.md} {
    font-size: 8rem;
  }
  @media ${devicesMax.sm} {
    font-size: 5rem;
  }
`
const TextBox = styled.div`
  width: 50%;

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

  @media ${devicesMax.sm} {
    font-size: 1.4rem;
  }
`

const StyledWorld = styled.span`
  color: red;
  text-shadow: 0 0 2rem;
  transition: all 0.4s;
  &:hover {
    text-shadow: 0 1rem 4rem;
  }
`

const StyledRecord = styled.span`
  color: green;
  text-shadow: 0 0 2rem;
  transition: all 0.4s;
  &:hover {
    text-shadow: 0 1rem 4rem;
  }
`
const StyledStar = styled.span`
  color: gold;
  text-shadow: 0 0 2rem;
  padding: 2rem;
  transition: all 0.4s;
  &:hover {
    text-shadow: 0 1rem 4rem;
  }
`

function Header() {
  return (
    <StyledHeader>
      <Heading>
        <StyledWorld>World</StyledWorld>
        <StyledStar>star</StyledStar>
        <StyledRecord>Record</StyledRecord>
      </Heading>
      <TextBox>
        <P>
          We create a platform for musicians across the world to participate and
          connect to the international music festival
        </P>
      </TextBox>
    </StyledHeader>
  )
}

export default Header
