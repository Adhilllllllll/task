import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dark from './Dark.jsx'
import BlackAndWhite from './Blackandwhite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dark/> */}
    <BlackAndWhite/>
  </StrictMode>,
)
