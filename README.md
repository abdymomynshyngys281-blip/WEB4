🏋️ Fitness Center API — Secure Backend (Assignment 4)
📌 Project Overview

This project implements a secure backend API for a Fitness Center using Node.js, Express, and MongoDB.
The system follows a scalable MVC architecture and demonstrates professional backend development practices including authentication, password security, and Role-Based Access Control (RBAC).

🏗 Architecture (MVC Pattern)

The project is structured using the Model–View–Controller pattern:

models/       → MongoDB schemas (User, Trainer, Workout)
routes/       → API endpoints
controllers/  → Business logic
middleware/   → Authentication and authorization
server.js     → App entry point


This structure makes the project modular, scalable, and maintainable.

🗂 Data Models
👤 User

Stores authentication data and roles.

email

password (hashed using bcrypt)

role ("user" or "admin")

🏋️ Trainer (Primary Entity)

Represents fitness trainers.

name

specialization

experienceYears

🏃 Workout (Secondary Entity)

Represents workout sessions linked to a trainer.

title

durationMinutes

difficulty

trainer (reference to Trainer)

Each workout is connected to a trainer using MongoDB ObjectId references.

🔐 Authentication & Security
Password Protection

Passwords are securely hashed using bcrypt before being stored in the database.

JWT Authentication

Users receive a JSON Web Token (JWT) after login or registration.
The token is required for accessing protected routes.

Role-Based Access Control (RBAC)
Action	Public	User	Admin
View Trainers/Workouts	✅	✅	✅
Create Trainer/Workout	❌	❌	✅
Update Trainer/Workout	❌	❌	✅
Delete Trainer/Workout	❌	❌	✅

Only admin users can modify data. Read operations are public.

🌐 API Endpoints
Authentication

POST /api/auth/register

POST /api/auth/login

Trainers

GET /api/trainers

POST /api/trainers (Admin only)

PUT /api/trainers/:id (Admin only)

DELETE /api/trainers/:id (Admin only)

Workouts

GET /api/workouts

POST /api/workouts (Admin only)

PUT /api/workouts/:id (Admin only)

DELETE /api/workouts/:id (Admin only)

⚙️ Setup Instructions

Clone the repository

git clone <your-repo-link>
cd project-folder


Install dependencies

npm install


Create a .env file

PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d


Run the server

npm run dev


Server runs on:

http://localhost:3000

🧪 Testing

API endpoints were tested using Postman.
Tests include:

Register/Login user

JWT-protected routes

Admin vs User access control

CRUD operations for Trainers and Workouts

🎯 Learning Outcomes

This project demonstrates:

Secure backend development

MVC architecture

MongoDB data modeling with relationships

JWT authentication

Password hashing

Role-Based Access Control (RBAC)

👨‍💻 Author

Shyngys Abdimomyn
Web Technologies 2 — Backend Assignment