import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({username:'',password:''})

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

const  HandleSubmit=(e)=>{
   e.preventDefault();
   navigate("/Login")
}
 
  return (
    <div>
        <h2>REGISTER</h2>
        <form onSubmit={HandleSubmit}>
            <input placeholder='Username' required /><br/>
            <input type="password" placeholder='password'required /><br/>
            <button type="submit">Register</button>
        </form>
    </div>

  )
}

export default Register