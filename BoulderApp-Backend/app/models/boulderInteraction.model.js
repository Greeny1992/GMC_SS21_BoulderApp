const sql = require("../../db.js");

// constructor
const BoulderInteraction = function(boulderInteraction) {
    this.comment = boulderInteraction.comment;
    this.status = boulderInteraction.status;
    this.userName = boulderInteraction.userName;
};


BoulderInteraction.getRecent = (boulderId, result) => {
    sql.query("SELECT a.ID, a.comment, a.status, b.name FROM boulderinteraction_user_assigned a, user b WHERE a.ID_User = b.ID AND a.ID Boulder = ? ORDER BY Erstellt DESC LIMIT 3"
        , [boulderId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("boulderInteractions: ", res);
        result(null, res);
    });
};

BoulderInteraction.create = (boulderId, userId, comment, status, result) => {
    sql.query("INSERT INTO boulderinteraction_user_assigned (ID_Boulder, ID_User, Kommentar, Status) VALUES ", [boulderId, userId, comment, status], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created interaction: ", { id: res.insertId });
        result(null, { id: res.insertId });
    });
};

BoulderInteraction.updateById = (id, boulderInteraction, result) => {
    sql.query(
        "UPDATE boulderinteraction_user_assigned SET comment = ?, status = ?, WHERE id = ?",
        [boulderInteraction.comment, boulderInteraction.status, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Interaction with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated interaction: ", { id: id, ...boulderInteraction });
            result(null, { id: id, ...boulderInteraction });
        }
    );
};

module.exports = BoulderInteraction;