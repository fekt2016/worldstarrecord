import styled from 'styled-components'
import Section from '../../ui/Section'
import { Link } from 'react-router-dom'

const StyledTicket = styled.div`
  /* height: 60rem; */
  background-color: black;
  padding: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--color-white-100);
`
const Card = styled.div`
  background-color: var(--color-white-100);
  border-radius: 10px;
  height: 20rem;
  width: 40rem;
  position: relative;
`
const Left = styled.div`
  height: 12rem;

  padding: 1rem;
  background-color: var(--color-white-100);
  color: var(--color-primary-900);
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  position: absolute;
  top: 4.5rem;
  left: -4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Right = styled.div`
  height: 100%;
  padding: 1rem;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`
const H4 = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
`
const Price = styled.p`
  font-size: 2rem;
`
const Button = styled.button`
  border: none;
  color: var(--color-primary-100);
  padding: 0.3rem 0.8rem;
  text-transform: uppercase;
`
const Vip = styled.span`
  /* color: red; */
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  background-color: red;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
`
function EventsTicket() {
  return (
    <Section>
      <StyledTicket>
        <Link to={`event/ghana`}>
          <Card>
            <Left>
              <H4>
                music & cultural <br />
                festival
              </H4>
              <Vip>vip</Vip>
            </Left>
            <Right background="../../../ghana2.webp">
              <Price>$500</Price>
              <p>toronto canada</p>
              <span>24th june 2024 </span>
              <Button>buy now</Button>
            </Right>
          </Card>
        </Link>
        <Card>
          <Left>
            <H4>
              music & cultural <br />
              festival
            </H4>
          </Left>
          <Right background="../../../pic.jpeg">
            <Price>$200</Price>
            <p>toronto canada</p>
            <span>24th june 2024 </span>
            <Button>buy now</Button>
          </Right>
        </Card>
      </StyledTicket>
    </Section>
  )
}

export default EventsTicket
