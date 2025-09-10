 import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './todoSlice';
import TodoList from './TodoList';
 
 const App = () => {
  const dispatch=useDispatch();
  const[taskText,setTaskText]=useState('');

  const handleAdd=()=>{
    if(taskText.trim()==='')return;
    dispatch(addTask(taskText));
    setTaskText('');
  }
   return (
     <div>
      <h1>TodoList</h1>
      <input
       value={taskText}
       onChange={(e)=>setTaskText(e.target.value)}
      />

      <button onClick={handleAdd}>
         Add Task
      </button>

      <TodoList/>
     </div>
     
   )
 }
 
 export default App