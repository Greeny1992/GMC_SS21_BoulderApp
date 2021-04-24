const BoulderInteraction = require("../models/boulderInteraction.model.js");


// Retrieve recent Interactions for boulder from the database.
exports.find = (req, res) => {

    let boulderId = req.param.boulderId;

    BoulderInteraction.getRecent(boulderId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        else res.send(data);
    });
};

// Create and Save a new Interaction
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Save Interaction in the database
    BoulderInteraction.create(req.body.boulderId, req.body.userId, req.body.comment, req.body.status, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Interaction."
            });
        else res.send(data);
    });
};

// Update an Interaction identified by the interactionId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    BoulderInteraction.updateById(
        req.params.interactionId,
        new BoulderInteraction(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Interaction with id ${req.params.interactionId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Interaction with id " + req.params.interactionId
                    });
                }
            } else res.send(data);
        }
    );
};
