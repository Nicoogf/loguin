import { createContext , useContext, useState} from "react";
import { createTaskRequest , getTasksRequest } from "../api/tasks";

const TaskContext = createContext() ;

export const useTask = () => {
  const context =  useContext( TaskContext )
  if(!context) {
    throw new Error ('useTask debe usarse dentro de un TaskProvider')
  }
  return context ;
}

export function TaskProvider ({ children }) {

    const [ tasks , setTasks ] = useState( [] ) ;

    const getTask = async () =>{
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


    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}