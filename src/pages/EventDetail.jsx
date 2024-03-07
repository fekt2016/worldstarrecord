import styled from 'styled-components'
import TicketCard from '../ui/TicketCard'

const StyledDetail = styled.div`
  background-color: red;
  display: flex;
`
const Preview = styled.div`
  height: 100vh;
  padding: 2rem;
  background-color: yellowgreen;
`
const Description = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
function EventDetail() {
  return (
    <StyledDetail>
      <Preview>
        <TicketCard />
      </Preview>
      <Description>
        <div>
          <h1>ghana-canada International </h1>
          <p>Music & cultural festival</p>
        </div>
        <div>
          <span>venue: 10 belfield Road, Etobicoke.</span>
          <span>(Kipling/belfield), Toronto</span>
          <span>Ontario, M9WIGI, Canada</span>
        </div>
        <div>
          <span>
            theme: Fostering creativity through music and culture to promote
            national development and peace.
          </span>
        </div>
      </Description>
    </StyledDetail>
  )
}

export default EventDetail
