import express, { Request, Response } from "express";
import task from "../models/task";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const tasks = await task.getTasks();
  res.json(tasks);
});

// Get a task by id
router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const foundTask = await task.getTaskById(id);
  res.json(foundTask);
});

// Create a new task
router.post('/', async (req: Request, res: Response) => {
  const description = req.body.description;
  await task.createTask(description);
  res.status(201).json({ message: "Task created successfully" });
});

// Update a task
router.put('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const description = req.body.description;
  await task.updateTask(id, description);
  res.json({ message: "Task updated successfully" });
});

// Delete a task
router.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await task.deleteTask(id);
  res.json({ message: "Task deleted successfully" });
});

export default router;
