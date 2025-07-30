import React from 'react'
 import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Register/>}/>
              <Route path='/login'  element={<Login/>}/>
              <Route path="/home"  element={<Home/>}/>
          </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App