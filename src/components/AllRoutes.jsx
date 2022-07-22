import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EachProduct from '../Pages/EachProduct'
import Laptop from '../Pages/Laptop'
import Login from '../Pages/Login'
import Phone from '../Pages/Phone'
import Register from '../Pages/Register'
import Search from '../Pages/Search'
import SmallAppliances from '../Pages/SmallAppliances'
import SmartWatches from '../Pages/SmartWatches'
import Tablets from '../Pages/Tablets'
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
        <Route path='/tablets' element={<Tablets/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/smartphone' element={<Phone/>}/>
        <Route path='/item/:id' element={<EachProduct/>}/>
    </Routes>
  )
}

export default AllRoutes