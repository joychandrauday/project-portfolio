import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import SideBarHome from '../pages/Home/SideBarHome'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-68px)] '>
        <Outlet />
        <SideBarHome />
      </div>
      <Footer />
    </div>
  )
}

export default Main
