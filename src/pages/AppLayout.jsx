import { Outlet } from 'react-router-dom'
import NavBar from '../features/Navbar/NavBar'
import Main from '../ui/Main'
import Footer from '../features/footer/Footer'

function AppLayout() {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default AppLayout
