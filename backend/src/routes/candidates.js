import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import db from "../config/db.js";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour créer le dossier uploads si pas là
const ensureUploadDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Dossier ${dirPath} créé ✅`);
  }
};

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../src/uploads");
    ensureUploadDir(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route POST
router.post("/", upload.single("cv"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;
    const cvPath = req.file ? req.file.filename : null;

    if (!firstName || !lastName || !email || !subject || !message || !cvPath) {
      return res.status(400).json({ success: false, message: "Veuillez remplir tous les champs et fournir un CV" });
    }

    const [result] = await db.query(
      "INSERT INTO candidates (firstName, lastName, email, phone, subject, message, cv_path) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, email, phone, subject, message, cvPath]
    );

    res.json({ success: true, message: "Candidature enregistrée avec succès ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
