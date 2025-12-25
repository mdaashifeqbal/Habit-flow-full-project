import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Outlet} from "react-router-dom"
import Footer from './Pages/Footer/Footer'


const App = () => {
  return (
    <div className='min-h-screen w-full bg-[#d8fbe9cb]'>
      <Navbar/>
      <Outlet/>
     <Footer/>
    </div>  
  )
}

export default App
