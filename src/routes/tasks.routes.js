import { Router } from "express";
import {
  createTask,
  deleteTasks,
  getTask,
  getTasks,
  updateTasks,
} from "../controllers/tasks.controller.js";

const router = Router()

router.get('/tasks', getTasks)
router.post('/tasks', createTask)
router.put('/tasks/:id',updateTasks)
router.delete('/tasks/:id',deleteTasks)
router.get('/tasks/:id',getTask)

export default router