import express from "express";
import dotenv from  "dotenv";
import cors from "cors"
import userRouter from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN
  // credentials: true
}));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit:  "16kb" }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/api/auth", userRouter)

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;