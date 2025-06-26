import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Herosection from './components/hero-section'
// import ThemeToggle from './components/ThemeToggle'
import Brands from './components/brands'
import { Courses } from './components/courses'

const App = () => {
 
  return (
    <div>
      <Navbar />
      {/* <ThemeToggle /> */}
      <Herosection />
      <Brands/>
      <Courses/>
    </div>
  )
}

export default App
