import { Outlet } from 'react-router-dom'
import Main from '../ui/Main'
import Footer from '../features/footer/Footer'
import Header from '../ui/Header'

function AppLayout() {
  return (
    <>
      <Header type="appLayout" />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default AppLayout
