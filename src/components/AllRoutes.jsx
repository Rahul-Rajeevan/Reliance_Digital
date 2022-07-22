import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Laptop from '../Pages/Laptop'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SmallAppliances from '../Pages/SmallAppliances'
import SmartWatches from '../Pages/SmartWatches'
import TopSellers from '../Pages/TopSellers'
import Home from './Home'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/laptops' element={<Laptop/>}/>
        <Route path='/small_appliances' element={<SmallAppliances/>}/>
        <Route path='/smartwatches' element={<SmartWatches/>}/>
        <Route path='/topsellers' element={<TopSellers/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='' element={}/> */}
        {/* <Route path='' element={}/> */}
    </Routes>
  )
}

export default AllRoutes