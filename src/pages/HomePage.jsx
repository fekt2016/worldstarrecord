import Event from '../features/homepage/Event'
import EventsTicket from '../features/homepage/EventsTicket'
import Header from '../ui/Header'
import Pictures from '../features/homepage/Pictures'

function HomePage() {
  return (
    <>
      <Header />
      <Event />
      <EventsTicket />
      <Pictures />
    </>
  )
}

export default HomePage
