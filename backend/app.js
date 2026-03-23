require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new product
app.post('/api/products', (req, res) => {
  const { name, quantity } = req.body;
  db.query(
    'INSERT INTO products (name, quantity) VALUES (?, ?)',
    [name, quantity],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Product added' });
    }
  );
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
