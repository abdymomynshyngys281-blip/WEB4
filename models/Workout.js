import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workout", workoutSchema);
