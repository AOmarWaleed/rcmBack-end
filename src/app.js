import express from "express";
import cors from "cors";
import patientRoutes from "./routes/patientRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/patients", patientRoutes);

// ! handle error globally 
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
