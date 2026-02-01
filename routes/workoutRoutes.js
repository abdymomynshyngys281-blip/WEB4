import express from "express";
import Workout from "../models/Workout.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET — всем
router.get("/", async (req, res) => {
  const workouts = await Workout.find().populate("trainer", "name specialization");
  res.json(workouts);
});

// POST — admin only
router.post("/", protect, adminOnly, async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
});

// PUT — admin only
router.put("/:id", protect, adminOnly, async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(workout);
});

// DELETE — admin only
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.json({ message: "Workout deleted" });
});

export default router;
