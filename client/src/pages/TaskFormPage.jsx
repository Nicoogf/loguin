import React, { useEffect } from 'react' ;
import { useForm } from "react-hook-form" 
import { useTasks } from '../context/TaskContext';
import { useNavigate , useParams } from 'react-router-dom';

const TaskFormPage = () => {
  const { register, handleSubmit , setValue  ,  } = useForm() ;
  const { createTask , getTask , updateTask} =  useTasks() ;
  const navigate = useNavigate() ;
  const params = useParams() ;

  useEffect( () => {
    async function loadTask() {
      if(params.id) {
        const task = await getTask(params.id)
          console.log(task)
          setValue('title' , task.title )
          setValue('description' , task.description )
        }
    }
    loadTask()
  }, [] )
  
  const onSubmit = handleSubmit((data)=> {
    if(params.id){
      updateTask( params.id  , data)
    }else{
      createTask(data) ;
    }   
    navigate("/tasks")
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