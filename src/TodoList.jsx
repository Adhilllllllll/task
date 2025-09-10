import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTasks } from './selectors'
import TodoItem from './TodoItem';

const TodoList = () => {
    const tasks=useSelector(selectAllTasks);


    if(!tasks.length)return<p>no task addded yet </p>
  return (
    <ul>
        {tasks.map((task)=>(
            <TodoItem key={task.id} task={task}/>
        ))}
    </ul>
  )
}

export default TodoList