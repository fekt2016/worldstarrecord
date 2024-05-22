import styled from 'styled-components'
import Section from '../../ui/Section'
import { devicesMax } from '../../styles/BreakPoint'
// import { devicesMax } from '../../styles/BreakPoint'

const StyledEvent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const EventCard = styled.div`
  flex: 1;
`

const Img = styled.img`
  width: 100%;
`

function EventsTicket() {
  return (
    <Section type="event">
      <StyledEvent>
        <EventCard>
          <Img src="../../../poster3.jpeg" alt="poster for concert" />
        </EventCard>
        <EventCard>
          <Img src="../../../poster1.jpeg" alt="poster for concert" />
        </EventCard>
        <EventCard>
          <Img src="../../../poster5.jpeg" alt="poster for concert" />
        </EventCard>
      </StyledEvent>
    </Section>
  )
}

export default EventsTicket
