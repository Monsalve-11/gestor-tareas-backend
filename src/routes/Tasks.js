import { Router } from "express";
import { Task } from "../models/Task.js";

const router = Router();

// Obtener todas las tareas
router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Crear una tarea
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Actualizar una tarea
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const [updated] = await Task.update(req.body, { where: { id } });
  if (updated) {
    const task = await Task.findByPk(id);
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

// Eliminar una tarea
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Task.destroy({ where: { id } });
  if (deleted) res.json({ message: "Tarea eliminada" });
  else res.status(404).json({ error: "Tarea no encontrada" });
});

export default router;
