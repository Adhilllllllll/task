 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
 const App = () => {

  //read store

  const count=useSelector(state=>state.count);


  //dispatch actions

  const dispatch =useDispatch();
  

   return (
     <div style={{padding:'20px'}}>
    
      <button onClick={()=>dispatch({type:'increment'})} style={{marginRight:'50px'}}>
         +
      </button>

        <p>{count}</p>
     
      <button onClick={()=>dispatch({type:'decrement'})} style={{marginRight:'50px'}}>
        -
      </button>
     </div>
   )
 }
 
 export default App