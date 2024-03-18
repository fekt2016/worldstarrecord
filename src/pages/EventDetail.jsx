import styled from 'styled-components'
import TicketCard from '../features/ticket/TicketCard'
import Modal from '../ui/Modal'
import { useState } from 'react'
import ChooseTicket from '../features/ticket/ChooseTicket'

const StyledDetail = styled.div`
  margin-top: 4rem;
  display: flex;
`
const Preview = styled.div`
  height: 100vh;
  padding: 2rem;
`
const Description = styled.div`
  padding: 2rem;
  background-color: aliceblue;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    margin-bottom: 4rem;
  }
`
const GetContent = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const PriceBox = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  span {
    text-transform: capitalize;
  }
`
const BtnBox = styled.div`
  width: 100%;
  display: flex;

  button {
    width: 100%;
    border: 2px solid var(--color-primary-900);
    border-radius: 10px;
    background-color: var(--color-white-100);
    font-size: 2rem;
    text-transform: capitalize;
  }
`
const H1 = styled.h1`
  text-transform: capitalize;
  font-size: 5rem;
`
const P = styled.p`
  font-size: 2rem;
`
const Date = styled.p`
  font-size: 3rem;
`

const Img = styled.img`
  width: 100% !important;
  height: 50rem;
`
function EventDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <StyledDetail>
      <Preview>
        <TicketCard />
        <GetContent>
          <PriceBox>
            <span>ghana-canada</span>
            <span>$200</span>
          </PriceBox>
          <BtnBox>
            <button onClick={() => setIsOpenModal((show) => !show)}>
              get ticket
            </button>
            {isOpenModal && (
              <Modal onClose={() => setIsOpenModal(false)}>
                <ChooseTicket />
              </Modal>
            )}
          </BtnBox>
        </GetContent>
      </Preview>
      <Description>
        <div>
          <Img src="../../public/world7.jpeg" alt="" />
        </div>
        <div>
          <H1>ghana-canada International </H1>
          <P>Music & cultural festival</P>
        </div>
        <div>
          <P>
            <span>
              <strong>Venue: </strong> 10 belfield Road, Etobicoke.
            </span>
            <span>(Kipling/belfield), Toronto</span>
            <span>Ontario, M9WIGI, Canada</span>
          </P>
          <P>
            <strong>Theme: </strong>Fostering creativity through music and
            culture to promote national development and peace.
          </P>
          <Date>
            <strong>Event Date: 24th july, 2024</strong>
          </Date>
        </div>
      </Description>
    </StyledDetail>
  )
}

export default EventDetail
