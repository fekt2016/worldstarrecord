import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EventBox = styled.div`
  padding: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`
const CardBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

const HeadingBox = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 5rem;
    text-transform: capitalize;
  }
`

function Event() {
  return (
    <EventBox>
      <HeadingBox>
        <span> events </span>
      </HeadingBox>
      <CardBox>
        <Link to={`ghana`}></Link>
      </CardBox>
    </EventBox>
  )
}

export default Event
