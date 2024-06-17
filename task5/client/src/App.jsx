import React from 'react'
import { BrowserRouter,  Routes, Route, } from 'react-router-dom'
import Home from './pages/CreateUser'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/user" element={<UserDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
