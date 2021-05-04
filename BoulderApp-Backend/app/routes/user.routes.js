module.exports = app => {
    const user = require("../controllers/user.controller.js");


    // Retrieve all Users
    app.get("/user", user.find);


    //the following routes are not used, they currently only serve as a template
    // Create a new Customer
    //app.post("/user", user.create);

    // Retrieve a single Customer with customerId
    //app.get("/user/:userId", user.findOne);

    // Update a Customer with customerId
    //app.put("/user/:userId", user.update);

    // Delete a Customer with customerId
    //app.delete("/user/:userId", user.delete);

    // Create a new Customer
    //app.delete("/user", user.deleteAll);
};