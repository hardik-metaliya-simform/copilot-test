import { Request, Response } from "express";
import * as taskService from "../services/task.service";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validations/task.validation";

export const getAllTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const task = taskService.getTaskById(id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};

export const createTask = (req: Request, res: Response) => {
  const { error } = createTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { title, description, priority, dueDate } = req.body;
  const newTask = taskService.createTask(
    title,
    description,
    priority,
    new Date(dueDate),
  );
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const { error } = updateTaskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const task = taskService.getTaskById(id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.completed) {
    return res
      .status(400)
      .json({ message: "Completed tasks cannot be updated." });
  }

  const updatedTask = taskService.updateTask(id, req.body);

  if (!updatedTask) {
    // This case might now be redundant due to the check above, but good for safety
    return res
      .status(404)
      .json({ message: "Task not found or cannot be updated" });
  }

  res.json(updatedTask);
};

export const deleteTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const success = taskService.deleteTask(id);
  if (!success) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(204).send();
};
