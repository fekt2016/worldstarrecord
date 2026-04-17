import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Event from './pages/Event'
import Contact from './pages/Contact'
import AppLayout from './pages/AppLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Gallery from './pages/Gallery'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<AppLayout />}>
            <Route path="about" element={<About />} />
            <Route path="events" element={<Event />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
