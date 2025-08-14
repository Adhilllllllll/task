import React, { useContext } from 'react'
import { outputChange } from './Input'

const Plus = () => {
    const {plus}=useContext(outputChange)
  return (
    <div>
        <h2>positive</h2>
        {plus.map((y,index)=>(
            <li key={index}>{y}</li>
        ))}
    </div>
  )
}

export default Plus