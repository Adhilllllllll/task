import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: input,
    };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
  };

  return (
    <>
      {/*  Bootstrap Navbar for UI showcase */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ToDo List App</Navbar.Brand>
        </Container>
      </Navbar>

      {/*  Main Content */}
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Task Manager</h2>

        {/*  Input field + Add Task button */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>

        {/*  Task list with delete button */}
        <ul className="list-group">
          {taskList.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{task.text}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;


 








//  import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';




// function Navvv() {
//   return (
//     <>
    

//       <br />
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

 
 
//  function App() {
// const [input,setInput]=useState();
// const [todoList,setTodolist]=useState([]);
 
// const addTodoItem=()=>{
 
//      const item={
//       id:Date.now(),
//       text:input,
//       completed:false,
//      }

//        setTodolist(prev=>[...prev,item]);
//        setInput("")
// }

// const deleteTask=(index)=>{
  
//   const deleteItem=todoList.filter((item)=> item.id !==index);
//   setTodolist(deleteItem);
// }
   
  
//    return (
//     <>
// {/*  
//        <Navvv/> */}



    
//      <div>
//       <h1>MY-TODO-APP</h1>
//       <input
//       type='text'
//       placeholder='Enter todo'
//       value={input}
//       onChange={(pass)=>setInput(pass.target.value)}
      
//        />
//         <button onClick={()=>addTodoItem()}>Add</button>
        
//         <ul>
//            {todoList.map(t => <li key={t.id}>
//             <span>{t.text}</span>
             
//             <button onClick={()=>deleteTask(t.id)}>Delete</button>
//            </li>)}
           
//         </ul>
        
//     </div>
//     </>
//    )
//  }
 
//  export default App
