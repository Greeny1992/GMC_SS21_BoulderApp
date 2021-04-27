module.exports = app => {
    const boulder = require("../controllers/boulder.controller.js");


    // Retrieve all Boulders
    app.get("/boulder", boulder.find);

    // Create a new Boulder
    app.post("/boulderDetail", boulder.create);

    // Retrieve a single Boulder with boulderId
    app.get("/boulderDetail/:boulderId", boulder.findOne);

    // Update a Boulder with boulderId
    app.put("/boulderDetail/:boulderId", boulder.update);
};