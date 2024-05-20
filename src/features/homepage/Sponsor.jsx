import styled from 'styled-components'
import Section from '../../ui/Section'

const ImgBox = styled.div`
  padding: 6rem;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  /* gap: 20px; */
  justify-content: space-evenly;
  align-items: center;
`

const Img = styled.img`
  height: 10rem;
  background-color: var(--color-grey-100);
`
const H2 = styled.h2`
  text-align: center;
  text-transform: uppercase;
`
const StyledSpon = styled.div``
const Container = styled.div``

function Sponsor() {
  return (
    <Section type="spon">
      <Container>
        <StyledSpon>
          <H2>sponsors</H2>
          <ImgBox>
            <Img
              src="../../../public/AA Trust Travels.png"
              alt="sponsors logo"
            />
            <Img src="../../../Karim & Brother's.png" alt="sponsors logo" />
            <Img src="../../../Geniuspring.png" alt="sponsors logo" />
            <Img src="../../../Shoe.png" alt="sponsors logo" />
            <Img src="../../../Toloba.png" alt="sponsors logo" />
            <Img src="../../../public/Lawson Herbal.png" alt="sponsors logo" />
            <Img src="../../../V-Bells.png" alt="sponsors logo" />
          </ImgBox>
        </StyledSpon>
        <StyledSpon>
          <H2>Media Partners</H2>
          <ImgBox>
            <Img src="../../../public/Angel Tv.png" alt="sponsors logo" />
            <Img src="../../../public/Lawson Herbal.png" alt="sponsors logo" />
            <Img
              src="../../../public/Royal Television.png"
              alt="sponsors logo"
            />

            <Img
              src="../../../public/Experience Africa.png"
              alt="sponsors logo"
            />
            <Img src="../../../public/Daily Guide.png" alt="sponsors logo" />
            <Img
              src="../../../public/Graphic communications group.png"
              alt="sponsors logo"
            />
            <Img src="../../../public/Gh Times.png" alt="sponsors logo" />
          </ImgBox>
        </StyledSpon>
        <StyledSpon>
          <H2>Partners</H2>
          <ImgBox>
            <Img
              src="../../../public/Ministry-Of-Foreign-Affairs-and-Regional-Integration.png"
              alt="sponsors logo"
            />
            <Img
              src="../../../public/Ministry of National Security.png"
              alt="sponsors logo"
            />
            <Img src="../../../public/culture.png" alt="sponsors logo" />

            <Img src="../../../public/pngwing.com.png" alt="sponsors logo" />

            <Img src="../../../public/Logos-7.png" alt="sponsors logo" />

            <Img src="../../../public/Musigha.png" alt="sponsors logo" />
            <Img
              src="../../../public/National Ambulance service.png"
              alt="sponsors logo"
            />
            <Img
              src="../../../public/Ghana Immigration.png"
              alt="sponsors logo"
            />
          </ImgBox>
        </StyledSpon>
      </Container>
    </Section>
  )
}

export default Sponsor
