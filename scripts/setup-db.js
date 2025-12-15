const mysql = require('mysql2/promise');

async function setup() {
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1', // Force IPv4
            user: 'root',
            password: '', // Default XAMPP password
        });

        console.log('Connected to MySQL server at 127.0.0.1');

        await connection.query('CREATE DATABASE IF NOT EXISTS anivera_db');
        console.log('Database anivera_db ensure created.');

        await connection.query('USE anivera_db');

        await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(255),
        project_type VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
        console.log('Table contact_submissions ensure created.');

        await connection.end();
        console.log('Setup complete.');
    } catch (err) {
        console.error('Setup failed:', err);
    }
}

setup();
