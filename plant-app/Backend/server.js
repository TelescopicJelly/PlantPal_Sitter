const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CactusSam21$",
    database: "userDB"
});


app.post('/register', (req, res) => {
    const email = req.body.email;
    const password =  req.body.password;
    const first_name = req.body.first_name;

    db.query(
        "INSERT INTO users (first_name, email, password) VALUES (?,?,?)", 
        [first_name, email, password],
        (err, result) => {
            //console.log(err);
            //console.log("Successful Registration");


        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Information Saved Successfully"});
        }

    });
});


app.post('/login', (req, res) => {
    const email = req.body.email;
    const password =  req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?", 
        [email, password], 
        (err, result) => {

        if(err) {
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong email/password combo"});
        }
        
    });
});


app.listen(3001, () => {
    console.log("Listening....");
})