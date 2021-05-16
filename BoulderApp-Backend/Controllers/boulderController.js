const Boulder = require("../Models/Boulder.js");

// Create and Save a new Boulder
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Save Boulder in the database
    Boulder.create(req.body.name, req.body.colour, req.body.difficulty, req.body.locationId, req.body.creatorId, (err, status, data) => {
        if (err)
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the Boulder."
            });
        else res.status(status).json({
            boulderId: data});
    });
};

// Retrieve all Boulders from the database.
exports.find = (req, res) => {
    Boulder.get(req.params.userId, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Boulders."
            });
        else res.send(data);
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

    Boulder.updateById(req.params.boulderId,req.body.name, req.body.colour, req.body.difficulty, req.body.locationId, req.body.userId, (err, status, data) => {
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