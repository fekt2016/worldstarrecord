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
            <Img src="../../../AA Trust Travels.png" alt="sponsors logo" />
            <Img src="../../../Karim & Brother's.png" alt="sponsors logo" />
            <Img src="../../../Geniuspring.png" alt="sponsors logo" />
            <Img src="../../../Shoe.png" alt="sponsors logo" />
            <Img src="../../../Toloba.png" alt="sponsors logo" />
            <Img src="../../../Lawson Herbal.png" alt="sponsors logo" />
            <Img src="../../../V-Bells.png" alt="sponsors logo" />
          </ImgBox>
        </StyledSpon>
        <StyledSpon>
          <H2>Media Partners</H2>
          <ImgBox>
            <Img src="../../../Angel Tv.png" alt="sponsors logo" />
            <Img src="../../../Lawson Herbal.png" alt="sponsors logo" />
            <Img src="../../../Royal Television.png" alt="sponsors logo" />

            <Img src="../../../Experience Africa.png" alt="sponsors logo" />
            <Img src="../../../Daily Guide.png" alt="sponsors logo" />
            <Img
              src="../../../Graphic communications group.png"
              alt="sponsors logo"
            />
            <Img src="../../../Gh Times.png" alt="sponsors logo" />
          </ImgBox>
        </StyledSpon>
        <StyledSpon>
          <H2>Partners</H2>
          <ImgBox>
            <Img
              src="../../../Ministry-Of-Foreign-Affairs-and-Regional-Integration.png"
              alt="sponsors logo"
            />
            <Img
              src="../../../Ministry of National Security.png"
              alt="sponsors logo"
            />
            <Img src="../../../culture.png" alt="sponsors logo" />

            <Img src="../../../pngwing.com.png" alt="sponsors logo" />

            <Img src="../../../Logos-7.png" alt="sponsors logo" />

            <Img src="../../../Musigha.png" alt="sponsors logo" />
            <Img
              src="../../../National Ambulance service.png"
              alt="sponsors logo"
            />
            <Img src="../../../Ghana Immigration.png" alt="sponsors logo" />
          </ImgBox>
        </StyledSpon>
      </Container>
    </Section>
  )
}

export default Sponsor
