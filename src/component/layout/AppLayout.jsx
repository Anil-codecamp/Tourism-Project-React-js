import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout
