import { CreateTaskDTo, SearchTaskDto } from "../dto/task.dto";
import { Task } from "../model/task.model";

export const createTaskHandler = async (task: CreateTaskDTo) => {
  const newTask = await Task.create(task);
  return newTask;
};

export const getTasksHandler = async (dto:SearchTaskDto) => {
    let query = {};
    if (dto.completed) {
      query = { completed: { $in: dto.completed } };
    }
  
  const tasks = await Task.find(query);
  return tasks;
};


export const getTaskHandler = async (id:string) => { 

   
    const task = await Task.findById(id);
    if (!task) { 
       throw Error(`No task with id ${id}`);  
    }
  return task;
 
};

//Delete task

export const deleteTaskHandler = async (id:string) => {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
       throw Error(`No task with id ${id}`);
    }
    return task;
    
    
};

// Update a task
export const updateTaskHandler = async (id:string, task:CreateTaskDTo ) => {
    const updatedTask = await Task.findByIdAndUpdate({ _id: id }, task, {
        new: true,
        runValidators: true,
      });
      if (!task) {
        throw Error(`No task with id ${id}`);
     }
     return updatedTask;
     
};
// module.exports = {
//     createTask,
//     getTasks,
//     getTask,
//     deleteTask,
//     updateTask,
// }
