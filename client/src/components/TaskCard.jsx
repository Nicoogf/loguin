import React from 'react'
import { useTasks } from '../context/TaskContext'
import { Link } from 'react-router-dom'

const TaskCard = ( {task} ) => {
  const { deleteTask } = useTasks()
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'> 
    <header className='flex justify-between'>
    <h2 className='text-2xl font-bold'> {task.title} </h2>
        <div className='flex gap-x-2  items-center'>
            <button onClick={()=> {
                deleteTask(task._id)
            }}>Eliminar</button>
            <Link to = {`/task/${task._id}`}>Editar</Link>
        </div>
    </header>
        
        <h3 className='text-slate-300'> {task.description} </h3>
        <p>{ new Date(task.date).toLocaleDateString()  }</p>

    </div>
  )
}

export default TaskCard