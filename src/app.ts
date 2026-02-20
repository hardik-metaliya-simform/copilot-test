import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import morgan from "morgan";
import healthRoutes from "./routes/health.routes";
import taskRoutes from "./routes/task.routes";
import { errorHandler } from "./middleware/errorHandler";
import swaggerSpecs from "./config/swagger";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(morgan("[:method] :url - Execution time: :response-time ms"));

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use("/health", healthRoutes);
app.use("/tasks", taskRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;
