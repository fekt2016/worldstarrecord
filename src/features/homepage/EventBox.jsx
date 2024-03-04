/* eslint react/prop-types: 0 */
import styled from 'styled-components'

const EventStyle = styled.div`
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--shadow-sm);

  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    ),
    url('../../../public/world22.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const EventTop = styled.div`
  margin-bottom: 6rem;
`
const EventTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`
const Pres = styled.span`
  position: absolute;
  color: var(--color-primary-100);
  text-transform: capitalize;
  top: 2.5rem;
  font-size: 1.8rem;
`
const Nighttext = styled.span`
  top: 1rem;
  font-size: 3rem;
  font-family: 'Style Script', cursive;
  color: var(--color-white-100);
  font-weight: 400;
  text-transform: capitalize;
`
const H2Sum = styled.h2`
  font-size: 5rem;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  color: var(--color-primary-100);
  position: absolute;
`
const H2Ni = styled.h2`
  font-size: 8rem;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  color: var(--color-white-100);
  position: absolute;
  top: 2rem;
`
const EventName = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
const SpanParty = styled.span`
  color: yellowgreen;
  font-family: 'Style Script', cursive;
  font-size: 4rem;

  z-index: 5;
  position: absolute;
  top: 8rem;

  text-shadow: 0 2px 1px red, -1px 3px 1px red, -2px 5px 1px red;
`
const EventBottom = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding: 1rem; */
  span {
    text-transform: capitalize;
    color: var(--color-white-100);
    font-size: 1.2rem;
  }
`
const DescriptionBoxRight = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  position: relative;
  span {
    text-transform: capitalize;
    color: var(--color-white-100);
    position: absolute;
  }
`
const Mon = styled.span`
  bottom: 0;
`
const Day = styled.span`
  top: 0;
`
const Num = styled.span`
  font-size: 4rem;
  color: var(--color-primary-100) !important;
`
const Divi = styled.div`
  margin: 0 auto;
  background-color: red;
  border: 2px solid yellow;
`
const Gha = styled.span`
  color: green;
  margin-top: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Img = styled.img`
  height: 3rem;
`
const P = styled.p`
  font-size: 1rem;
  color: var(--color-white-100);
  text-transform: capitalize;
`
const Venue = styled.p`
  color: red;
  font-size: 1.2rem;
`

function EventBox() {
  return (
    <EventStyle>
      <EventTop>
        <EventTopContainer>
          <Nighttext>World star</Nighttext>
          <Pres>records</Pres>
        </EventTopContainer>
        <EventName>
          <H2Sum>cultural</H2Sum>
          <H2Ni>music</H2Ni>
          <SpanParty>festival</SpanParty>
          <Gha>
            <Img src="../../../public/flaggh.jpeg" alt="ghana" />
            <span>Ghana canada international</span>
            <Img src="../../../public/caflag.webp" alt="canada" />
          </Gha>
        </EventName>
      </EventTop>
      <EventBottom>
        <DescriptionBox>
          <span>Foster Creativity</span>
          <span>promote music</span>
          <span>promote cultural</span>
          <span>promote National dev. & peace</span>
        </DescriptionBox>
        <DescriptionBox>
          <span>DJ Mark</span>
          <span>DJ John</span>
        </DescriptionBox>
        <DescriptionBoxRight>
          <Day>friday</Day>
          <Num>06</Num>
          <Mon>august</Mon>
        </DescriptionBoxRight>
      </EventBottom>
      <Divi></Divi>
      <div>
        <P>
          partner: Cko Golden Record label ltd, alan showbiz & cargo service
        </P>
        <Venue>
          Venue: 10 belfield road, etobicoke.
          <br /> (kipling/befield), toronto ontario, m9wigi, canada
        </Venue>
      </div>
    </EventStyle>
  )
}

export default EventBox
