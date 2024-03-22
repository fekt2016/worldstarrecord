import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './pages/Event'
import Contact from './pages/Contact'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import EventDetail from './pages/EventDetail'
import Checkout from './pages/Checkout'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'

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

            <Route path="event/:event" element={<EventDetail />} />
            <Route path="event/:event/checkout" element={<Checkout />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="cart" element={<Cart />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
