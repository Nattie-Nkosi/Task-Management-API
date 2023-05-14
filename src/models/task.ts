import pool from "../config/database";

interface Task {
  id: number;
  description: string;
}

// Get all tasks
const getTasks = async (): Promise<Task[]> => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
  return result.rows;
};

// Get a single task by id
const getTaskById = async (id: number): Promise<Task> => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0];
};

// Create a new task
const createTask = async (description: string): Promise<void> => {
  await pool.query('INSERT INTO tasks (description) VALUES ($1)', [description]);
};

// Update a task
const updateTask = async (id: number, description: string): Promise<void> => {
  await pool.query('UPDATE tasks SET description = $1 WHERE id = $2', [description, id]);
};

// Delete a task
const deleteTask = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
