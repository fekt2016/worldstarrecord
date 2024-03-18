import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './pages/Event'
import Contact from './pages/Contact'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
// import Ticket from './pages/Ticket'
import EventDetail from './pages/EventDetail'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="event" element={<Event />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="ticket" element={<Ticket />} /> */}
            <Route path="event/:event" element={<EventDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
