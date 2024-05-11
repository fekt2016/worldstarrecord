/* eslint react/prop-types: 0 */
import styled from 'styled-components'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  /* max-width: 60rem; */
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-primary-100);
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: var(--color-white-100);
  color: var(--color-black-900);
`

const H1 = styled.h1`
  font-size: 2rem;
  /* padding-top: 2rem;
  padding-left: 2rem; */
  text-transform: capitalize;
  margin-bottom: 2rem;
`

const P = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
`
const ImgBox = styled.div`
  height: 20rem;
  width: 100%;
  position: relative;
  background-image: url('../../../public/ghana2.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Heart = styled(FaRegHeart)`
  position: absolute;
  top: 20px;
  right: 10px;
  color: var(--color-white-100);
  cursor: pointer;
`
const Price = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

function TicketCard({ link, event, venue, date, price }) {
  return (
    <Card to={link}>
      <ImgBox>
        <Heart />
        <Price>${price}</Price>
      </ImgBox>
      <Detail>
        <H1>{event}</H1>
        <P>{venue}</P>
        <P>{date}</P>
      </Detail>
    </Card>
  )
}

export default TicketCard
