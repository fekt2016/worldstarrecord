import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const StyledAbout = styled.div`
  padding: 8rem;
`
const AboutSection = styled.section`
  display: flex;
  gap: 40px;
  margin-bottom: 10rem;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const ImgBox = styled.div`
  flex: 1;
`
const TextBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devicesMax.md} {
    order: 1;
  }
`
const Img = styled.img`
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`

const H1 = styled.h1`
  font-size: 6rem;
  text-transform: capitalize;
  background: linear-gradient(to right, red, yellow, green);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 3rem;
`
const H2 = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  background: linear-gradient(to right, red, yellow, green);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 3rem;
`
const P = styled.p`
  text-align: start;
  hyphens: none;
`
function About() {
  return (
    <StyledAbout>
      <H1>world star records</H1>
      <AboutSection>
        <ImgBox>
          <Img src="../../public/world3.jpeg" alt="star" />
        </ImgBox>
        <TextBox>
          <H2>Years of experience </H2>
          <P>
            World Star Records (WSR) is an artist management and events company
            which started in 2008. WSR seeks to support and develop emerging
            artists as well as to help artist build their brand so they can
            devote time and resources to invest in their creativity. World Star
            Records organizes musical concert to promote peace during election
            year and support the emerging artist.
          </P>
        </TextBox>
      </AboutSection>
      <AboutSection>
        <TextBox>
          <H2>Achievement</H2>
          <P>
            Our Achievement Within a period of two years, the Company has been
            able to produce 18 different artistes from different parts of the
            country and was able to produce a peaceful song called Oman Ghana
            which was used by Ghana Broadcasting Cooperation during 2008
            presidential debate and 2012 World Star Record collaborated with
            Ministry of Chieftaincy and Culture to organized peace Concert under
            the theme; Avoiding Conflict and Mayhem in 2012 Elections. Indeed
            World Star Records is the fastest growing Multimedia Company in
            Ghana.
          </P>
        </TextBox>
        <ImgBox>
          <Img src="../../public/world4.jpeg" alt="star" />
        </ImgBox>
      </AboutSection>
    </StyledAbout>
  )
}

export default About
