import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Регистрация
export const register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      email,
      password,
      role: role === "admin" ? "admin" : "user",
    });

    res.status(201).json({
      message: "User registered ✅",
      token: generateToken(user),
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

// Логин
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      message: "Logged in ✅",
      token: generateToken(user),
      user: { id: user._id, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};
