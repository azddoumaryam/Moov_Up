import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "moovup_user",
  password: process.env.DB_PASSWORD || "Moovup2025!",
  database: process.env.DB_NAME || "moovup",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test de la connexion
pool.getConnection()
  .then(conn => {
    console.log("Connected to MySQL database");
    conn.release();
  })
  .catch(err => {
    console.error("Error connecting to MySQL:", err);
  });

export default pool;