import React from 'react' ;
import {useForm} from "react-hook-form" 
import { useTasks } from '../context/TaskContext';

const TaskFormPage = () => {
  const {register, handleSubmit } = useForm() ;
  const {createTask} =  useTasks()

  const onSubmit = handleSubmit((data)=> {
    createTask(data) ;
  })

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form action='' onSubmit={onSubmit}>

        <input  
        type="text" 
        placeholder='Titulo'
        {...register('title') }
        autoFocus
        className='w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2'
        />
        

        <textarea 
        rows="3" 
        placeholder='Descripcion'
        className='w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2'
        {...register('description')}/>

        <button> Guardar </button>
      </form>
    </div>
  )
}

export default TaskFormPage