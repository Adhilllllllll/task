import React, { useContext } from 'react'
import { outputChange } from './Input'

const Minus = () => {
    const {minus}=useContext(outputChange)
  return (
    <div> 
        <h2>negative</h2>
        {minus.map((x,index)=>(
            <li key={index}>{x}</li>
        ))}
    </div>
  )
}

export default Minus