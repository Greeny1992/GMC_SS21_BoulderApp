const BoulderInteraction = require("../Models/BoulderInteraction.js");


// Retrieve recent Interactions for boulder from the database.
exports.find = (req, res) => {

    let boulderId = req.params.boulderId;
    BoulderInteraction.getRecent(boulderId, (err, status,data) => {
        if (err)
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving Interactions."
            });
        else res.status(200).json(data);
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
    BoulderInteraction.create(req.body.boulderId, req.body.userId,req.body.title, req.body.comment, req.body.status, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Interaction."
            });
        else res.sendStatus(200);
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
            } else res.status(200).send({
                message: "Successfully updated interaction: " + req.params.interactionId
            });
        }
    );
};