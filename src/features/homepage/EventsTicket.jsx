import styled from 'styled-components'
import Section from '../../ui/Section'
// import { devicesMax } from '../../styles/BreakPoint'

const StyledTicket = styled.div`
  padding: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  border: 5px solid #000;

  border-radius: 10px;
`

function EventsTicket() {
  return (
    <Section type="event">
      <StyledTicket>
        <header>
          <h2>Ghana-Canada International </h2>
          <span> Music and cultural festival </span>
        </header>

        <span>2024</span>

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
        <div>+16099137252||+233546009191|| +233244741674|| +41763663079 ||</div>
        <div>
          paa solo, kaakyere K.Appiah, Bessa Simons, Nana Gyinadu kuffour I
          musical chief
        </div>
      </StyledTicket>
    </Section>
  )
}

export default EventsTicket
