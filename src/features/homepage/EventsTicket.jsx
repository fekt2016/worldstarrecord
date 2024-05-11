import styled from 'styled-components'
import Section from '../../ui/Section'
// import { devicesMax } from '../../styles/BreakPoint'

const StyledTicket = styled.div`
  padding: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  border: 5px solid #000;
  /* margin: 2rem 20rem; */
  border-radius: 10px;
  background-color: red;
  /* color: var(--color-white-100); */
`
// const Card = styled.div`
//   background-color: var(--color-white-100);
//   border-radius: 10px;
//   height: 20rem;
//   width: 40rem;
//   position: relative;
// `
// const Left = styled.div`
//   height: 12rem;

//   padding: 1rem;
//   background-color: var(--color-white-100);
//   color: var(--color-primary-900);
//   border-radius: 10px;
//   box-shadow: var(--shadow-sm);
//   position: absolute;
//   top: 4.5rem;
//   left: -4rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
// const Right = styled.div`
//   height: 100%;
//   padding: 1rem;
//   background-image: ${(props) => `url(${props.background})`};
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: end;
// `
// const H4 = styled.h4`
//   font-size: 2rem;
//   text-transform: uppercase;
// `
// const Price = styled.p`
//   font-size: 2rem;
// `
// const Button = styled.button`
//   border: none;
//   color: var(--color-primary-100);
//   padding: 0.3rem 0.8rem;
//   text-transform: uppercase;
// `
// const Vip = styled.span`
//   /* color: red; */
//   height: 4rem;
//   width: 4rem;
//   border-radius: 100%;
//   background-color: red;
//   text-transform: uppercase;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
function EventsTicket() {
  return (
    <Section type="event">
      <StyledTicket>
        <header>
          <h2>Ghana-Canada International </h2>
          <span> Music and cultural festival </span>
        </header>

        <span>2024</span>

        <div>
          Fostering creativity through music and culture to promote Natinal
          development and peace.
        </div>
        <div>29th - 31st march 2024</div>
        <div>
          10 belfield road, etoicoke,(kipling/belfield), toronto, Ontario,
          M9WIGI, Canada
        </div>
        <div>register now </div>
        <div>+16099137252||+233546009191|| +233244741674|| +41763663079 ||</div>
        <div>
          paa solo, kaakyere K.Appiah, Bessa Simons, Nana Gyinadu kuffour I
          musical chief
        </div>
        {/* {ticket.map((tick) => (
          <TicketCard
            key={tick.id}
            event={tick.event}
            link={tick.event}
            venue={tick.venue}
            date={tick.date}
            price={tick.price}
          />
        ))} */}
        {/* <TicketCard link={`event/ghana`} />
        <TicketCard link={`event/ghana`} />
        <TicketCard link={`event/ghana`} /> */}
      </StyledTicket>
    </Section>
  )
}

export default EventsTicket
