import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer';
import LogingPop from './components/LoginPop/LogingPop'
import CoursePage from './pages/CoursePage/coursePage'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LogingPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path="/courses/:topicId" element={<CoursePage />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App

