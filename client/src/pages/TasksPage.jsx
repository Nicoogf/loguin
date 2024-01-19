import { useEffect } from "react";
import { useTasks } from "../context/TaskContext"

const TasksPage = () => {
  const { getTasks , tasks  } = useTasks() ;

  useEffect( () => {
    getTasks()
  } , [])

  if(tasks.length === 0 ) return (<h2> No hay tareas </h2>)

  return (
    <div>
      {
        tasks.map( (task ) => (
          <div key={task.id}> 
            <h2> {task.title} </h2>
            <h2> {task.description} </h2>
          </div>
        ))
          
        
      }
    </div>
  )
}

export default TasksPage;