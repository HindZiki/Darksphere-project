import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = ({setShowLogin}) => {
    
const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
    <ul className="navbar-menu">
    <a href='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a>

        <a href='explore-courses' onClick={()=>setMenu("Courses")} className={menu==="Courses"?"active":""}>Courses</a>
        <a href='Topics-display' onClick={()=>setMenu("Topics")} className={menu==="Topics"?"active":""}>Topics</a>
        <a href='' onClick={()=>setMenu("Certifications")} className={menu==="Certifications"?"active":""}>Certifications</a>
        <a href='footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
    </ul>
    <div className="navbar-right">
        <img src={assets.search} alt="" />
    
        <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
    </div>
  )
}

export default Navbar

