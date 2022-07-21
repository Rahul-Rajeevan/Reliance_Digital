import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Laptop from '../Pages/Laptop'
import SmallAppliances from '../Pages/SmallAppliances'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/laptops' element={<Laptop/>}/>
        <Route path='/small_appliances' element={<SmallAppliances/>}/>
        {/* <Route path='' element={}/>
        <Route path='' element={}/> */}
    </Routes>
  )
}

export default AllRoutes