const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CactusSam21$",
    database: "userDB"
});

// API endpoint to fetch plant sitters
app.get('/plant-sitters', (req, res) => {
  const first_name = req.body.first_name;
  //const 


  const query = "SELECT user_ID, first_name, location, rate, profile_picture FROM users WHERE plant_sitter = 1";
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching plant sitters:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.listen(3001, () => {
    console.log("Listening....");
})
