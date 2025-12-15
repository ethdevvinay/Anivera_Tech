import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1:3306",
  user: process.env.DB_USER || "u641431622_aniveraweb",
  password: process.env.DB_PASSWORD || "Anivera@321#",
  database: process.env.DB_NAME || "u641431622_aniveraweb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
