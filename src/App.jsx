import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Course from './components/Course'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App