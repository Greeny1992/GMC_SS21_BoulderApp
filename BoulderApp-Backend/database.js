const mysql = require("mysql2");

module.exports = mysql.createConnection({
    host: "freedb.tech",
    port: "3306",
    user: "freedbtech_Schorsch",
    password: "f4@hPAEb@gy4pUw",
    database: "freedbtech_BoulderApp"
});