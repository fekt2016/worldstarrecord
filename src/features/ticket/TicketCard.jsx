import styled from 'styled-components'
const Card = styled.div`
  max-width: 40rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-primary-100);
`

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

const H1 = styled.h1`
  font-size: 2rem;
  padding-top: 2rem;
  padding-left: 2rem;
  text-transform: capitalize;
`
const H2 = styled.div`
  margin-left: 2rem;
  text-transform: capitalize;
  color: var(--color-primary-100);
`
const Price = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
`
const P = styled.p`
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: bold;
`

function TicketCard() {
  return (
    <Card>
      <div>
        <img src="../../ghana2.webp" />
      </div>
      <div>
        <H1>Ghana-canada international</H1>
        <H2>music & cultral festival</H2>
      </div>
      <Detail>
        <div>
          <P>14th july 2024</P>
          <P> toronto</P>
          <P>canada</P>
        </div>
        <Price>
          <P>$200</P>
        </Price>
      </Detail>
    </Card>
  )
}

export default TicketCard
