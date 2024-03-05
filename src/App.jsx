import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './pages/Event'
import Contact from './pages/Contact'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
