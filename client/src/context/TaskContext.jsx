import { createContext , useContext, useState} from "react";
import { createTaskRequest , deleteTaskRequest, getTasksRequest } from "../api/tasks";

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
      const res =   await deleteTaskRequest(id)
      console.log(res)
    }


    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}