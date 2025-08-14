import React, { createContext, useState } from 'react'
import Minus from './Minus';
import Plus from './Plus';

 export const outputChange=createContext()

const Input = () => {
    const[submit,setSubmit]=useState();
    const[minus,setMinus]=useState([])
    const[plus,setPlus]=useState([])
    const[err,setError]=useState()


    const handleChange=(e)=>{
      setSubmit(e.target.value)
    }

    const handleClick=()=>{
        if(submit >0){
            setPlus([...plus,submit])
        }else if(submit <0){
            setMinus([...minus,submit])
        }else{
            setError('NO LETTERS ! only numbers are allowed')
        }
        
    }
  

     

  return (
    <> 
    <div>

        <input type='text' value={submit} onChange={handleChange}/>
        <button onClick={handleClick}>click</button>
        <h2>{err}</h2>
    </div>
    <outputChange.Provider 
    value={{minus:minus,plus:plus}}>
         
     <Minus/>
     <Plus/>

    </outputChange.Provider>
    </>
  )
}

export default Input