import { Router } from "express" ;
import { authRequire } from "../middlewares/validateToken.js" ;
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask

} from "../controllers/task.controller.js" ;

const router = Router() ;

router.get("/tasks" , authRequire , getTasks ) ;
router.get("/tasks/:id" , authRequire , getTask ) ;
router.post("/tasks" , authRequire , createTask ) ;
router.delete("/tasks/:id" , authRequire , deleteTask ) ;
router.put("/tasks" , authRequire , deleteTask ) ;

export default router ;