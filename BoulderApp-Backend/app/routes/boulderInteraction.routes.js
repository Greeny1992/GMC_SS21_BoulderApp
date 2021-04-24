module.exports = app => {
    const boulderInteraction = require("../controllers/boulderInteraction.controller.js");


    // Retrieve recent Interactions for boulder
    app.get("/user/:boulderId", boulderInteraction.find);

    // Create a new Interaction
    app.post("/user", boulderInteraction.create);

    // Update a Interaction with interactionId
    app.put("/user/:interactionId", boulderInteraction.update);
};