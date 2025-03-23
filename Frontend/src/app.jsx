import React from 'react'
import Home from './pages/Home'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'
import UserSignUp from './pages/UserSignUp'
import UserLogin from './pages/UserLogin'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-register" element={<CaptainSignUp />} />
      </Routes>
    </div>
  )
}

export default App