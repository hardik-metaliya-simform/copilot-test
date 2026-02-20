import { Task } from "../models/task.model";

let tasks: Task[] = [];
let nextId = 1;

export const getAllTasks = (): Task[] => {
  return tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
};

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find((task) => task.id === id);
};

export const createTask = (
  title: string,
  description: string,
  priority: "low" | "medium" | "high",
  dueDate: Date,
): Task => {
  const newTask: Task = {
    id: nextId++,
    title,
    description,
    completed: false,
    priority,
    dueDate,
  };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = (
  id: number,
  updateData: Partial<Omit<Task, "id">>,
): Task | undefined => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return undefined;
  }

  const originalTask = tasks[taskIndex];
  if (originalTask.completed) {
    // Optionally, you can throw an error or return a specific response
    return undefined;
  }

  const updatedTask = { ...originalTask, ...updateData };
  tasks[taskIndex] = updatedTask;
  return updatedTask;
};

export const deleteTask = (id: number): boolean => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return false;
  }
  tasks.splice(taskIndex, 1);
  return true;
};
