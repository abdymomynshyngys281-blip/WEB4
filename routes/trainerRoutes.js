import express from "express";
import Trainer from "../models/Trainer.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET — доступен всем
router.get("/", async (req, res) => {
  const trainers = await Trainer.find();
  res.json(trainers);
});

// POST — только admin
router.post("/", protect, adminOnly, async (req, res) => {
  const trainer = await Trainer.create(req.body);
  res.status(201).json(trainer);
});

// PUT — только admin
router.put("/:id", protect, adminOnly, async (req, res) => {
  const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(trainer);
});

// DELETE — только admin
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Trainer.findByIdAndDelete(req.params.id);
  res.json({ message: "Trainer deleted" });
});

export default router;
