const express = require('express');
const { appendFile } = require('fs');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const { query } = require('express');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "365Pass",
    database: 'webdata',
});

con.connect((err) =>{
    if (err) throw err;
    console.log("Connected")
    con.query("SELECT * FROM webdata.user", (err,result) =>{
        console.log(err)
    })
})

app.get('/api', (req,res) =>{
    const sqlSelect = "SELECT * FROM webdata.user"
    con.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
})

app.post('/api/insert', (req, res) =>{ 

    const name = req.body.name;
    const last = req.body.last;
    const email = req.body.email;

    const sqlInsert = "INSERT INTO webdata.user (name, last, email) VALUES (?,?,?)"
    con.query(sqlInsert, [name, last, email], (err, result) => {
        res.send(query.sql);
    })
})

app.listen(3001);