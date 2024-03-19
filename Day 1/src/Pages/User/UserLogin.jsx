import React from 'react'
import Navbar from '../../Components/User/Navbar'
import NavbarDown from '../../Components/User/NavbarDown'
import Login from './Login'
import Footer from '../../Components/User/Footer'

function UserLogin() {
  return (
    <div>
        <Navbar/>
        {/* <NavbarDown/> */}
        <Login/>
        <Footer/>
    </div>
  )
}

export default UserLogin