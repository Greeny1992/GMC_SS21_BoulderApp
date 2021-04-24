const sql = require("../../db.js");

// constructor
const Like = function(like) {
    this.userId = like.email;
    this.boulderId = like.boulderId;
};

Like.create = (userId, boulderId, result) => {
    sql.query("INSERT INTO boulderlike_user_assigned (ID_Boulder, ID_User) VALUES (? ,?)", [boulderId, userId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, { id: res.insertId, userId, boulderId });
    });
};

Like.remove = (userId, boulderId, result) => {
    sql.query("DELETE FROM boulderlike_user_assigned WHERE BoulderId = ? AND UserId = ?", [boulderId, userId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found user with the id
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, res);
    });
};

module.exports = Like;