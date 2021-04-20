const mysql = require('mysql');

//connect to MySQL Database
// This connection would be secured in real world application
const con = mysql.createConnection({
    host: "sql11.freemysqlhosting.net",
    port: "3306",
    user: "sql11407083",
    password: "buLSmjMga9",
    database: "sql11407083"
});

module.exports = con;