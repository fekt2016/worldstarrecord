import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import TicketCard from '../features/ticket/TicketCard'

// const ticket = [
//   {
//     id: 1,
//     event: 'ghana-canada international festival music',
//     date: '24th April, 2024',
//     venue: '(Kipling/belfield), Toronto, Ontario, M9WIGI, Canada',
//   },
//   {
//     id: 2,
//     event: 'ghana-canada international festival music',
//     date: '24th April, 2024',
//     venue: '(Kipling/belfield), Toronto, Ontario, M9WIGI, Canada',
//   },
//   {
//     id: 3,
//     event: 'ghana-canada international festival music',
//     date: '24th April, 2024',
//     venue: '(Kipling/belfield), Toronto, Ontario, M9WIGI, Canada',
//   },
// ]

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
// const Card = styled.div`
//   border-radius: 10px;
//   overflow: hidden;
//   border: 1px solid var(--color-primary-100);
// `
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
// const Coming = styled.span`
//   color: red;
// `

function Event() {
  return (
    <EventBox>
      <HeadingBox>
        <span> events </span>
      </HeadingBox>
      <CardBox>
        <Link to={`ghana`}>{/* <TicketCard /> */}</Link>
      </CardBox>
    </EventBox>
  )
}

export default Event
