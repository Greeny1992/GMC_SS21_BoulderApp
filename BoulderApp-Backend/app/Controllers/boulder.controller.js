const Boulder = require("../models/boulder.model.js");

// Create and Save a new Boulder
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Save Boulder in the database
    Boulder.create(req.body.name, req.body.colour, req.body.difficulty, req.body.photo, req.body.locationId, req.body.creatorId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Boulder."
            });
        else res.send(data);
    });
};

// Retrieve all Boulders from the database.
exports.find = (req, res) => {

    Boulder.get((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Boulders."
            });
        else res.send(data);
    });
};

// Find a single Boulder with a customerId
exports.findOne = (req, res) => {
    Boulder.findById(req.params.boulderId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Boulder with id ${req.params.boulderId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.boulderId
                });
            }
        } else res.send(data);
    });
};

// Update a Boulder identified by the boulder in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    User.updateById(req.params.boulderId,req.body.name, req.body.colour, req.body.difficulty, req.body.photo, req.body.locationId, req.body.changeUserId, res);
};
