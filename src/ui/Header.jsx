import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'
import { Link } from 'react-router-dom'

const StyledHaeder = styled.header`
  height: 50rem;
  width: 100vw;
  @media ${devicesMax.md} {
    height: 60rem;
    padding-top: 8rem;
  }

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
  justify-content: flex-start;
  align-items: center;
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
  font-size: 2rem;
  color: var(--color-white-100);
  text-align: center;
  margin-bottom: 8rem;

  @media ${devicesMax.sm} {
    font-size: 1.4rem;
  }
`
const StyledLink = styled(Link)`
  font-size: 3rem;
  background-color: var(--color-primary-900);
  border: none;
  padding: 0.8rem 5rem;
  border-radius: 100px;
  color: var(--color-white-100);
  text-transform: capitalize;
`

function Header() {
  return (
    <StyledHaeder>
      <Heading>World star Record</Heading>
      <TextBox>
        <P>
          We create a platform for musicians across the world to participate and
          connect to the international music fes tival
        </P>

        <StyledLink to={`event`}>Book ticket</StyledLink>
      </TextBox>
    </StyledHaeder>
  )
}

export default Header
