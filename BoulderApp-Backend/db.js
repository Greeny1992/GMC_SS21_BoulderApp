const mysql = require('mysql');

//connect to MySQL Database
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "boulderapp"
});

module.exports = con;