import styled from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

import Sponsor from '../features/homepage/Sponsor'

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
  /* background: -webkit-linear-gradient(to right, red, yellow, green);
  background-clip: text;
  -webkit-text-fill-color: transparent; */
  text-align: center;
  margin-bottom: 3rem;
`
const H2 = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  /* background: -webkit-linear-gradient(to right, red, yellow, green); */
  /* background-clip: text;
  -webkit-text-fill-color: transparent; */
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-grey-400);
`
const P = styled.p`
  text-align: start;
  hyphens: none;
  color: var(--color-grey-500);
`
function About() {
  return (
    <StyledAbout>
      <H1>world star records Ltd</H1>
      <AboutSection>
        <ImgBox>
          <Img src="../../world3.jpeg" alt="star" />
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
      </AboutSection>
      <AboutSection>
        <TextBox>
          <H2>Vision</H2>
          <P>
            To deliver quality and efficient services to Ghana with high level
            of integrity through music and culture.
          </P>
          <P>
            To create a peaceful environment for elections through musical
            concert throughout Ghana with international standard.
          </P>
          <P>To assist and mentor upcoming young artistes.</P>
          <P>
            To promote local music and international festival collaboration with
            Folk Music Ontario, Canada and other stakeholders in an annual
            program in Ghana.
          </P>
        </TextBox>
        <ImgBox>
          <Img src="../../world4.jpeg" alt="star" />
        </ImgBox>
      </AboutSection>
      <AboutSection>
        <ImgBox>
          <Img src="../../world4.jpeg" alt="star" />
        </ImgBox>
        <TextBox>
          <H2>Goal</H2>
          <P>
            To create a platform for musicians across the world to participate
            and connect to the international music festival.
          </P>
        </TextBox>
      </AboutSection>
      <AboutSection>
        <TextBox>
          <H2>Mission</H2>
          <P>
            To secure the means and resources to support and promote the
            development of talented artiste collaborating with stakeholders to
            promote peace through musical concert.
          </P>
        </TextBox>
        <ImgBox>
          <Img src="../../world4.jpeg" alt="star" />
        </ImgBox>
      </AboutSection>

      <Sponsor />
    </StyledAbout>
  )
}

export default About
