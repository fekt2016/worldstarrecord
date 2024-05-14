import styled from 'styled-components'
import Section from '../../ui/Section'

const Container = styled.div`
  padding: 6rem;
  display: flex;
  justify-content: space-evenly;
`

const Img = styled.img`
  height: 10rem;
`

function Sponsor() {
  return (
    <Section>
      <Container>
        <Img src="../../../Geniuspring.png" alt="sponsors logo" />
        <Img src="../../../Shoe.png" alt="sponsors logo" />
        <Img src="../../../Toloba.png" alt="sponsors logo" />
        <Img src="../../../V-Bells.png" alt="sponsors logo" />
        <Img src="../../../Karim & Brother's.png" alt="sponsors logo" />
      </Container>
    </Section>
  )
}

export default Sponsor
