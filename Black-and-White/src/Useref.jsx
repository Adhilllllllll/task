import React from 'react'

function Useref(props) {
   
  return (
    <div> 
         <h1>{props.name}</h1>
         <h2>{props.age}</h2>
         <h3>{props.phone}</h3>
         <h4>{props.email}</h4>
    </div>
  )
}

export default Useref;