import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./config/database.js";
import taskRoutes from "./routes/tasks.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

try {
  await sequelize.sync();
  console.log("BD sincronizada");
  app.listen(PORT, () => {
    console.log(`servidor en http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("error al iniciar:", err);
}
