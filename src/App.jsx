 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './action';
 
 const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.count);


   return (
     <div style={{padding:'20px',fontFamily:'Arial'}}>
      <h1>Counter Example </h1>
      <p>{count}</p>

      <button onClick={()=>dispatch(increment())} style={{marginRight:'10px'}}>
          Increment
      </button>

      <button onClick={()=>dispatch(decrement())}>
         Decrement
      </button>
     </div>
   )
 }
 
 export default App