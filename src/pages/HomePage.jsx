// import Event from '../features/homepage/Event'
import EventsTicket from '../features/homepage/EventsTicket'
import Pictures from '../features/homepage/Pictures'
import MessageBar from '../features/homepage/MessageBar'
import EventVideo from '../features/homepage/EventVideo'
import Sponsor from '../features/homepage/Sponsor'
import Header from '../ui/Header'
import Footer from '../features/footer/Footer'

function HomePage() {
  return (
    <>
      <Header type="home" />
      <EventsTicket />
      <Pictures />
      <MessageBar />
      <EventVideo />
      <Sponsor />
      <Footer />
    </>
  )
}

export default HomePage
