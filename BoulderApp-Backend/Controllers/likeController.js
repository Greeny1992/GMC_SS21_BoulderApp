const Like = require("../Models/Like.js");

// Add a like to a Boulder
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Like
    const like = new Like({
        boulderId: req.params.boulderId,
        userId: req.body.userId
    });

    // Save Like in the database
    Like.create(like.userId, like.boulderId,  (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while liking the boulder."
            });
        else res.status(200).send(data);
    });
};


// Removes a like from a boulder
exports.delete = (req, res) => {
    Like.remove(req.body.userId, req.params.boulderId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Specified like not found.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete like"
                });
            }
        } else res.status(200).send({ message: `Like was deleted successfully!` });
    });
};