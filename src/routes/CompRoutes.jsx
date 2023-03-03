import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeadBar from '../components/HeadBar'
import About from '../pages/About'
import Home from '../pages/Home'

const CompRoutes = () => {
  return (
    <BrowserRouter>
      <HeadBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CompRoutes