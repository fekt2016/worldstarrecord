// import Event from '../features/homepage/Event'
import EventsTicket from '../features/homepage/EventsTicket'
import Header from '../ui/Header'
import Pictures from '../features/homepage/Pictures'
import MessageBar from '../features/homepage/MessageBar'
import EventVideo from '../features/homepage/EventVideo'
import Sponsor from '../features/homepage/Sponsor'

function HomePage() {
  return (
    <>
      <Header />
      <EventsTicket />
      <Pictures />
      <MessageBar />
      <EventVideo />
      <Sponsor />
    </>
  )
}

export default HomePage
