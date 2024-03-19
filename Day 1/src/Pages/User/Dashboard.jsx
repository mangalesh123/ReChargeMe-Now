import React from 'react'
import Navbar from '../../Components/User/Navbar'
import UserDashboard from '../../Components/User/Dashboard/UserDashboard'
import Footer from '../../Components/User/Footer'
function Dashboard() {
  return (
    <div className=''>
        <Navbar/>
        <UserDashboard/>
        <Footer/>
    </div>
  )
}

export default Dashboard