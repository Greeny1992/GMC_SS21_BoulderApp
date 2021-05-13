const sql = require("../database");

// constructor
const Like = function(like) {
    this.userId = like.email;
    this.boulderId = like.boulderId;
};

Like.create = async (userId, boulderId, result) => {
    try {
        console.log()
        await sql.promise().query("INSERT INTO boulderlike_user_assigned (ID_Boulder, ID_User) VALUES (? ,?)", [boulderId, userId]);
        result(null, 200);
    } catch (error) {
        console.log(error);
        result(500)
    }
    
};

Like.remove = async (userId, boulderId, result) => {
    try {
        await sql.promise().query("DELETE FROM boulderlike_user_assigned WHERE ID_Boulder = ? AND ID_User = ?", [boulderId, userId]);
        result(null,200);
    } catch (error) {
        console.log(error);
        result(500)
    }
};

module.exports = Like;