import { Task } from "../model/task.model";
import { NextFunction, Response, Request } from "express";
import {
  createTaskHandler,
  deleteTaskHandler,
  getTaskHandler,
  getTasksHandler,
  updateTaskHandler,
} from "../service/task.service";
import { SearchTaskDto } from "../dto/task.dto";

export const createTask = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const task = await createTaskHandler(req.body);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req: Request<{},{},{},SearchTaskDto>, res: Response, next:NextFunction) => {
  try {
    const dto = req.query;
    const tasks = await getTasksHandler(dto);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};


export const getTask = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const task = await getTaskHandler(id);

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

//Delete task

export const deleteTask = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const task = await deleteTaskHandler(id);

    res.status(200).send("Task deleted");
  } catch (error) {
    next(error);
  }
};

// Update a task
export const updateTask = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const task = await updateTaskHandler(id, req.body);

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
// module.exports = {
//     createTask,
//     getTasks,
//     getTask,
//     deleteTask,
//     updateTask,
// }
