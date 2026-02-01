import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experienceYears: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Trainer", trainerSchema);
