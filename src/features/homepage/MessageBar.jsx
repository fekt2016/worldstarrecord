import styled from 'styled-components'
import Section from '../../ui/Section'
import { devicesMax } from '../../styles/BreakPoint'

const StyledBar = styled.div`
  display: flex;

  @media ${devicesMax.md} {
    flex-direction: column;
    gap: 30px;
    padding: 3rem;
  }
`
const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 4rem;
  padding-bottom: 3rem;
  background-image: url('../../../Papoose 1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${devicesMax.md} {
    flex-basis: 30rem;
  }
`
const ImgBox = styled.div`
  flex: 1;

  /* overflow: hidden; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(225, 0, 0, 0.54);
    position: absolute;
    top: -3rem;
    right: -3rem;
    z-index: -1;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`

const H2 = styled.h2`
  font-size: 3.5rem;
  color: black;
  text-align: start;
  margin-bottom: 1rem;

  @media ${devicesMax.md} {
    font-size: 2rem;
  }
`
const P = styled.p`
  text-align: center;
  color: black;
  font-size: 1.6rem;
  padding: 1rem;
`
function MessageBar() {
  return (
    <Section type="msg">
      <StyledBar>
        <TextBox>
          <H2>Worlds Largest Musical Event</H2>
          <P>
            Celebrate the magic of music & connect with people from all around
            the world
          </P>
        </TextBox>
        <ImgBox>
          <Img src="../../../world7.jpeg" alt="music festival from accra" />
        </ImgBox>
      </StyledBar>
    </Section>
  )
}

export default MessageBar
