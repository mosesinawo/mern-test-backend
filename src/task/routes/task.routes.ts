import express from 'express';
import { 
    createTask,
    getTasks,
    getTask,
    deleteTask, 
    updateTask} from "../controllers/task.controller"

const taskRoutes = express.Router()
    // taskRoutes.route("/").get(getTasks).post(createTask)
    // taskRoutes.route("/:id").get(getTask).delete(deleteTask).
    // put(updateTask)

//Create a task
taskRoutes.post("/", createTask) 
  // Get/Read Tasks
taskRoutes.get("/", getTasks)
//Get task
taskRoutes.get("/:id", getTask) 
//delete task
taskRoutes.delete("/:id", deleteTask) 
//Update task
taskRoutes.put("/:id", updateTask) 

export default taskRoutes ;  