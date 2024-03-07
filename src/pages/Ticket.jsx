import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TicketCard from '../ui/TicketCard'

const TicketBox = styled.div`
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

function Ticket() {
  return (
    <TicketBox>
      <div>
        <span>Coming event</span>
      </div>
      <CardBox>
        <Link to={`ghana`}>
          <TicketCard />
        </Link>
        {/* <Card>
          <div>
            <img src="../../public/ghana2.webp" />
          </div>
          <h1>Ghana-canada international</h1>
          <h2>music & cultral festival</h2>

          <div>
            <p>14 july 2024</p>
            <p> toronto</p>
            <p>canada</p>
          </div>
        </Card>
        <Card>
          <div>
            <img src="../../public/ghana2.webp" />
          </div>
          <h1>Ghana-canada international</h1>
          <h2>music & cultral festival</h2>

          <div>
            <p>14 july 2024</p>
            <p> toronto</p>
            <p>canada</p>
          </div>
        </Card> */}
      </CardBox>
    </TicketBox>
  )
}

export default Ticket
