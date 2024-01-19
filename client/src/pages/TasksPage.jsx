import { useEffect } from "react";
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { getTasks , tasks  } = useTasks() ;

  useEffect( () => {
    getTasks()
  } , [])

  if(tasks.length === 0 ) return (<h2> No hay tareas </h2>)

  return (
    <div className="grid grid-cols-3 gap-2">
      {
        tasks.map( (task) => (
        <TaskCard key = {task.id} task={task}/>
        ))
          
        
      }
    </div>
  )
}

export default TasksPage;