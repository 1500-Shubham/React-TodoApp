import React from 'react'

export const TodoItem = ({title,description,isCompleted,id,
    updateHandler,deleteHandler}) => {
  return (
    <div className="todo">
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
            <input type="checkbox" checked={isCompleted} 
            onChange={()=>{updateHandler(id)}}></input>
            <button className='btn' onClick={()=>{deleteHandler(id)}}>Delete </button>
        </div>
    </div>
  )
}
