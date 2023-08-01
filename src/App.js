import React from 'react'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return(
  <>

  <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
      </Routes>
      
    <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
