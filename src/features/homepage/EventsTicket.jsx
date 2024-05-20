import styled from 'styled-components'
import Section from '../../ui/Section'
// import { devicesMax } from '../../styles/BreakPoint'

const StyledEvent = styled.div`
  /* padding: 6rem; */
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  /* border: 5px solid #000; */

  border-radius: 10px;
`
const EventCard = styled.div`
  flex: 1;
`
// const Header = styled.header`
//   width: 100%;
//   background-color: red;
//   display: flex;
//   flex-direction: column;
//   position: relative;
// `
// const StyledSpan = styled.span`
//   background-color: green;
//   padding: 1rem;
//   text-align: center;
//   color: white;
//   font-family: 'Metal Mania', system-ui;
//   font-weight: 400;
//   font-style: normal;
//   font-size: 2rem;
// `
// const StyledDate = styled.span`
//   position: absolute;
//   right: 10px;
//   bottom: 30px;
//   font-weight: bold;
//   font-size: 2rem;
//   background-color: white;
//   border-radius: 10px;
//   padding: 0.2rem 0.5rem;
//   transform: rotate(25deg);
// `

// const H1 = styled.h1`
//   font-family: 'Oleo Script Swash Caps', system-ui;
//   font-weight: 700;
//   font-style: normal;
//   font-size: 5rem;
//   text-align: center;
//   -webkit-text-stroke: 5px transparent;
//   background: -webkit-linear-gradient(top, red, green);
//   background-clip: text;
//   color: gold;
//   text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
// `
// const Center = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   background-color: antiquewhite;
// `
const Img = styled.img`
  height: 50rem;
`

function EventsTicket() {
  return (
    <Section type="event">
      <StyledEvent>
        <EventCard>
          <Img src="../../../public/poster3.jpeg" alt="poster for concert" />
        </EventCard>
        <EventCard>
          {/* <Center> */}
          <Img src="../../../public/poster1.jpeg" alt="poster for concert" />
          {/* <Header>
              <H1> Ghana-Bahamas International</H1>
              <StyledSpan> Music and cultural festival</StyledSpan>
              <StyledDate>2024</StyledDate>
            </Header>

            <div>
              Fostering creativity through music and culture to promote Natinal
              development and peace.
            </div>
            <div>29th - 31st march 2024</div>
            <div>
              10 belfield road, etoicoke,(kipling/belfield), toronto, Ontario,
              M9WIGI, Canada
            </div>
            <div>register now </div>
            <div>
              +16099137252||+233546009191|| +233244741674|| +41763663079 ||
            </div>
            <div>
              paa solo, kaakyere K.Appiah, Bessa Simons, Nana Gyinadu kuffour I
              musical chief
            </div> */}
          {/* </Center> */}
        </EventCard>
        <EventCard>
          <Img src="../../../public/poster5.jpeg" alt="poster for concert" />
        </EventCard>
      </StyledEvent>
    </Section>
  )
}

export default EventsTicket
