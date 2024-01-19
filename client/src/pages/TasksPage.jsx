import { useEffect } from "react";
import { useTask } from "../context/TaskContext"

const TasksPage = () => {
  const { getTask } = useTask() ;

  useEffect( () => {
    getTask()
  } , [])

  return (
    <div>TasksPage</div>
  )
}

export default TasksPage;