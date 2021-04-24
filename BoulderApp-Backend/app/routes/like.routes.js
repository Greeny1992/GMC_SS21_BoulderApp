module.exports = app => {
    const like = require("../controllers/like.controller.js");


    // Create a new Like
    app.post("/like", like.create);

    // Delete a like with boulderId and userId
    app.delete("/like/:boulderId/:userId", like.delete);
};