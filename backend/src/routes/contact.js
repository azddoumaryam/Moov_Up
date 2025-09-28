import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prenom, nom, email, telephone, sujet, message } = req.body;

    if (!prenom || !nom || !email || !sujet || !message) {
      return res.status(400).json({ success: false, message: "Veuillez remplir tous les champs obligatoires" });
    }

    await db.query(
      "INSERT INTO contact (prenom, nom, email, telephone, sujet, message) VALUES (?, ?, ?, ?, ?, ?)",
      [prenom, nom, email, telephone, sujet, message]
    );

    res.json({ success: true, message: "Message enregistré avec succès ✅" });
  } catch (err) {
    console.error("Erreur contact:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;