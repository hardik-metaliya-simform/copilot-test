import Joi from "joi";

const sevenDaysFromNow = new Date();
sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);

export const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(3).required(),
  priority: Joi.string().valid("low", "medium", "high").required(),
  dueDate: Joi.date().iso().max(sevenDaysFromNow).required(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  description: Joi.string().min(3),
  completed: Joi.boolean(),
  priority: Joi.string().valid("low", "medium", "high"),
  dueDate: Joi.date().iso().max(sevenDaysFromNow),
});
