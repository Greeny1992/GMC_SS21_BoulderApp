module.exports = app => {
    const boulderInteraction = require("../controllers/boulderInteraction.controller.js");


    // Retrieve recent Interactions for boulder
    app.get("/boulderInteraction/:boulderId", boulderInteraction.find);

    // Create a new Interaction
    app.post("/boulderInteraction", boulderInteraction.create);

    // Update a Interaction with interactionId
    app.put("/boulderInteraction/:interactionId", boulderInteraction.update);
};