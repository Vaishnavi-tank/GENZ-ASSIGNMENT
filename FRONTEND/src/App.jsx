import { useState } from 'react'

import Results from './component/Results'
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Home from './component/Home'
import Order from './component/Order'
import Services from './component/Services'
import Contact from './component/Contact'
import About from './component/About'
import Megaoffers from './component/Megaoffers'
import Winners from './component/Winners'
function App() {

  return (
    <>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/results' element={<Results/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/megaOffer' element={<Megaoffers/>}/>
    <Route path='/winner' element={<Winners/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
