import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Products from './page/Products'
import Contact from './page/Contact'
import About from './page/About'
import Cart from './page/Cart'
import Navbar from './components/Navbar'




const App = () => {
  return (
   
  <BrowserRouter>
  <Navbar/>
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
