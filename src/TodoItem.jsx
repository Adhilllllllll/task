import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from './todoSlice';

const TodoItem = ({task}) => {
    const dispatch=useDispatch();
    const [isEditing,SetIsEditing]=useState(false);
    const [editText,setEditText]=useState(task.text)


    const handleEdit=()=>{
        if (isEditing){
            dispatch(editTask({id:task.id,text:editText}));
        }
        SetIsEditing(!isEditing);
    }


  return (
    <li className='flex gap-2 items-center'>
        {isEditing?(
            <input
              value={editText}
              onChange={(e)=>setEditText(e.target.value)}

            />
        ):(
            <span>{task.text}</span>
        )}
        <button onClick={handleEdit}>
           {isEditing ? 'save' :'edit'}
        </button>
        <button onClick={()=>dispatch(deleteTask(task.id))} >
            Delete
        </button>
    </li>
  )
}

export default TodoItem