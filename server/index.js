const express = require('express');
const { appendFile } = require('fs');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const MySQLStore = require('express-mysql-session')(session);

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
        console.log(result[2])
    })
})
app.get('/api', (req,res) =>{
    const sqlSelect = "SELECT * FROM webdata.user"
    con.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
})

app.listen(3001);