import { createContext , useContext, useState} from "react";
import { createTaskRequest , deleteTaskRequest, getTasksRequest , getTaskRequest} from "../api/tasks";

const TaskContext = createContext() ;

export const useTasks = () => {
  const context =  useContext( TaskContext )
  if(!context) {
    throw new Error ('useTask debe usarse dentro de un TaskProvider')
  }
  return context ;
}

export function TaskProvider ({ children }) {

    const [ tasks , setTasks ] = useState( [] ) ;

    const getTasks = async () =>{
        try {
            const res = await getTasksRequest()
            console.log(res) 
            setTasks(res.data) 
        } catch (error) {
            console.error(error)
        }
    }

    const createTask = async(task) => {       
       const res =  await createTaskRequest(task)
       console.log(res)
    }

    const deleteTask = async(id) => {
        try {
        const res = await deleteTaskRequest(id)         
        if( res.status === 204 ) setTasks( tasks.filter(task => task._id !== id) ) 
        } catch (error) {
          console.log(error)  
        }
    }

    const getTask = async(id) => {
        try {
          const res = await getTaskRequest(id)
          return res.data
        } catch (error) {
           console.error(error) 
        }
    
    } 

    const updateTask = async( id , task )=> {

    }
     


    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}