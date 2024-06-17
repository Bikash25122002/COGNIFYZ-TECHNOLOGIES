import React from 'react'
import { BrowserRouter,  Routes, Route, } from 'react-router-dom'
import Home from './pages/CreateUser'
import UserDetails from './pages/UserDetails'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/userprofile" element={<UserDetails/>}/>
      <Route path='/userdetails' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
