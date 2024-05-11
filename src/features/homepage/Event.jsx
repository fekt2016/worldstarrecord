import styled from 'styled-components'
import Section from '../../ui/Section'
import EventBox from './EventBox'

const StyledEvent = styled.div`
  padding: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`

function Event() {
  return (
    <Section>
      <StyledEvent>
        <EventBox />
      </StyledEvent>
    </Section>
  )
}

export default Event
