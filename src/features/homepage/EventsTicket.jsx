import styled, { css } from 'styled-components'
import Section from '../../ui/Section'
import { devicesMax } from '../../styles/BreakPoint'
import { Link } from 'react-router-dom'

const StyledEvent = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: space-around;
  align-items: center;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const EventCard = styled.div`
  height: 600px;
  border-radius: 10px;

  ${(props) =>
    props.event === 'prev' &&
    css`
      background-image: url('../../../ADONKO 2 FINGERS.jpg');
    `}
  ${(props) =>
    props.event === 'pass' &&
    css`
      background-image: url('../../../2012event.jpeg');
    `}
    ${(props) =>
      props.event === 'cur' &&
      css`
        background-image: url('../../../upcoming.jpeg');
      `}
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  flex: 1;
  transition: all 0.8s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    transform: scale(1.1);
  }
`

function EventsTicket() {
  return (
    <Section type="event">
      <StyledEvent>
        <EventCard event={'pass'}>
          <Link></Link>
        </EventCard>
        <EventCard event={'prev'}>
          <Link></Link>
        </EventCard>

        <EventCard event={'cur'}>
          <Link></Link>
        </EventCard>
      </StyledEvent>
    </Section>
  )
}

export default EventsTicket
