import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Проверка работы API
app.get("/", (req, res) => {
  res.json({ message: "Fitness API running 💪" });
});

// 🔐 Auth routes
app.use("/api/auth", authRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/workouts", workoutRoutes);

// Подключение к MongoDB и запуск сервера
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT} 🚀`)
    );
  } catch (err) {
    console.error("Database error:", err.message);
    process.exit(1);
  }
};

start();
