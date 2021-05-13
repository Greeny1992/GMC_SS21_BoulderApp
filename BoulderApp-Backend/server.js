
const app = require("./app");
const PORT = 3000;

require('dotenv').config({path: '.env'});

app.listen(PORT, () => {
    console.log(`HTTP Server running on port:${PORT}`);
});