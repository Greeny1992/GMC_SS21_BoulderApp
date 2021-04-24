const mysql = require('mysql');

//connect to MySQL Database
// This connection would be secured in real world application
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "boulderapp"
});

module.exports = con;