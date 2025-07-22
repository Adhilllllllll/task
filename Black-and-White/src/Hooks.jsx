import React, { useState } from "react";

function Hooks(){
   
    // const arr=useState(0);
    // const value=arr[0];
    // const setValue = arr[1];//otherwise below in destructured way
     const [value,setValue]=useState(0);
     const[color,setColor]=useState("white");
    return (
        <div>
            <div style={{background:color}} >
            <button onClick={()=>{
                // setValue(value + 1)
                setValue((state)=> {
                    return state +1
                })
            }}>increment</button>
            <label>{value}</label>
            <button onClick={()=>{
                // setValue(value -1)
                 setValue((state)=> {
                    return state -1
                })
            }}>decrement</button>
        </div>
        
        <button onClick={()=>{
            setColor("red")
        }}>Red</button>
         <button onClick={()=>{
            setColor("blue")
        }}>Blue</button>
        
        </div>
    )
}

export default Hooks;