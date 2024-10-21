const express = require("express");
const mysql = require("mysql");
//const cors = require('cors');

const app = express();

app.use(express.json());

//app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CactusSam21$",
    database: "userDB"
});

app.post('/register', (req, res) => {
    //const email = req.body.email;
    //const password =  req.body.password;
    //const first_name = req.body.first_name;

    db.query(
        "INSERT INTO users (email, password, first_name) VALUES (?,?)", 
        [email, password, first_name],
        (err, result) => {
            console.log(err);
        }
    );
});

/*app.post ('/users', (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    /*const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json("Error");
        if(data.length > 0) {
            return res.json("Login Successfully")
        } else {
            return res.json("No Record")
        }
        
    })
})*/

app.listen(3001, () => {
    console.log("Listening....");
})