 import React, { useState } from 'react'
//  import 'bootstrap/dist/css/bootstrap.min.css';
//  import { Header } from './components/Header';
 function App() {
const [input,setInput]=useState();
const [todoList,setTodolist]=useState([]);
 
const addTodoItem=()=>{
 
     const item={
      id:Date.now(),
      text:input,
      completed:false,
     }

       setTodolist(prev=>[...prev,item]);
       setInput("")
}

const deleteTask=(index)=>{
  
  const deleteItem=todoList.filter((item)=> item.id !==index);
  setTodolist(deleteItem);
}
   
  
   return (
     <div>
      <h1>MY-TODO-APP</h1>
      <input
      type='text'
      placeholder='Enter todo'
      value={input}
      onChange={(pass)=>setInput(pass.target.value)}
      
       />
        <button onClick={()=>addTodoItem()}>Add</button>
        
        <ul>
           {todoList.map(t => <li key={t.id}>
            <span>{t.text}</span>
             
            <button onClick={()=>deleteTask(t.id)}>Delete</button>
           </li>)}
           
        </ul>
        
    </div>
   )
 }
 
 export default App

 
