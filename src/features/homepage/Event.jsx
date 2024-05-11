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

// const LeftBox = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `
// const CenterBox = styled.div``
// const RightBox = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `

// const EventBox = styled.div``

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
