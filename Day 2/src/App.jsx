
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Login from "./Pages/User/Login"
import Navbar from "./Components/User/Navbar"
import NavbarDown from "./Components/User/NavbarDown"
import UserLogin from "./Pages/User/UserLogin"
import UserDashboard from "./Components/User/Dashboard/UserDashboard"
import Dashboard from "./Pages/User/Dashboard"
import Footer from "./Components/User/Footer"
import Home from "./Pages/User/Home"
// import Dashboard from "./Pages/User/Dashboard"
// import Signup from "./Pages/User/Signup"


function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<UserLogin/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route path="/user/navbar" element={<Navbar/>}></Route>
        <Route path="/user/navbardown" element={<NavbarDown/>}></Route>
        <Route path="/user/dashboard" element={<Dashboard/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
       </Routes>
      </BrowserRouter>
      {/* <div><p>Prmaoth</p></div> */}
    </>
  )
}

export default App
