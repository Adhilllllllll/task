import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({username:"",password:""})

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]: etarget.value})
    }

    const HandleLogin=(e)=>{
        e.preventDefault()
        
     navigate("/Home")
    }

    
  return (
    <div>
        <h2>Login</h2>
        <form  onSubmit={HandleLogin}>
            <input placeholder ="Username" required /><br/>
            <input type="password" placeholder ="Password" required /><br/>
            <button type="submit">Login</button>
        </form>
         
    </div>
  )
}

export default Login