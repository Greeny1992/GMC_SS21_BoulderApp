module.exports = app => {
    const like = require("../controllers/like.controller.js");


    // Create a new Customer
    app.post("/like", like.create);

    // Delete a Customer with customerId
    app.delete("/like/:boulderId/:userId", like.delete);
};