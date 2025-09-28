import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import candidatesRouter from "./src/routes/candidates.js";
import contactRouter from "./src/routes/contact.js";

dotenv.config();
const app = express();

// Autoriser tous les frontends locaux
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", "https://clubmoovup.com", "https://www.clubmoovup.com"], // ajoute 5173
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/candidates", candidatesRouter);
app.use("/api/contact", contactRouter);

// Dossier uploads en statique
app.use("/uploads", express.static("src/uploads"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
