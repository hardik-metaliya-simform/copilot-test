import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of your task
 *           minLength: 3
 *           maxLength: 100
 *         description:
 *           type: string
 *           description: The description of the task
 *           minLength: 3
 *         completed:
 *           type: boolean
 *           description: Whether the task is completed
 *         priority:
 *           type: string
 *           description: The priority of the task
 *           enum: [low, medium, high]
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: The due date of the task
 *       example:
 *         id: 1
 *         title: Read a book
 *         description: Finish reading the book 'The New Turing Omnibus'
 *         completed: false
 *         priority: medium
 *         dueDate: "2026-02-23T10:00:00Z"
 *     CreateTask:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - priority
 *         - dueDate
 *       properties:
 *         title:
 *           type: string
 *           description: The title of your task
 *           minLength: 3
 *           maxLength: 100
 *         description:
 *           type: string
 *           description: The description of the task
 *           minLength: 3
 *         priority:
 *           type: string
 *           description: The priority of the task
 *           enum: [low, medium, high]
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: The due date of the task (must be within 7 days from now)
 *       example:
 *         title: My first task
 *         description: This is the description for my first task
 *         priority: high
 *         dueDate: "2026-02-21T18:30:00Z"

 *     UpdateTask:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of your task
 *           minLength: 3
 *           maxLength: 100
 *         description:
 *           type: string
 *           description: The description of the task
 *           minLength: 3
 *         completed:
 *           type: boolean
 *           description: Whether the task is completed
 *         priority:
 *           type: string
 *           description: The priority of the task
 *           enum: [low, medium, high]
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: The due date of the task (must be within 7 days from now)
 *       example:
 *         title: My updated task
 *         completed: true
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Returns the list of all the tasks, sorted by due date
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/", taskController.getAllTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 */
router.get("/:id", taskController.getTaskById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTask'
 *     responses:
 *       201:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request
 */
router.post("/", taskController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update the task by the id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTask'
 *     responses:
 *       200:
 *         description: The task was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request (e.g., validation error, trying to edit a completed task)
 *       404:
 *         description: The task was not found
 */
router.put("/:id", taskController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       204:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */
router.delete("/:id", taskController.deleteTask);

export default router;
