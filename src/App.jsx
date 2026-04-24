import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Products from './page/Products'
import Contact from './page/Contact'
import About from './page/About'
import Cart from './page/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'




const App = () => {

const [location, setlocation] = useState()


const getlocation = async ()=>{
  navigator.geolocation.getCurrentPosition(async pos =>{
    const {latitude, longitude} = pos.coords
    console.log(latitude, longitude);

    const url =`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    try {
      const location = await axios.get(url)
      
      const exactLocation = location.data.address
      setlocation(exactLocation)
      



    } catch (error) {
       console.log(error)
    }

  })
}
useEffect(()=>{
  getlocation()
},[])

  return (
   
  <BrowserRouter>
  <Navbar location={location}/>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
