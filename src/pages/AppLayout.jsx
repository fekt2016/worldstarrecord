import { Outlet } from 'react-router-dom'
import NavBar from '../features/Navbar/NavBar'

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default AppLayout
