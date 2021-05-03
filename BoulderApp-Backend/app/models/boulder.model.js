const sql = require("../../db.js");

// constructor
const Boulder = function(boulder) {
    this.name = boulder.name;
    this.colour = boulder.colour;
    this.difficulty = boulder.difficulty;
    this.photo = boulder.photo;
    this.locationId = boulder.locationId;
    this.creatorName = boulder.creatorName;
    this.lastChangeUserName = boulder.lastChangeUserName;
    this.lastChangeTimestamp = boulder.lastChangeTimestamp;
};

Boulder.create = (name, colour, difficulty, photo, locationId, creatorId, result) => {
    sql.query("INSERT INTO boulder (bezeichnung, farbe, schwierigkeit, foto, ID_Location, ID_Ersteller) VALUES (?,?,?,?,?,?)", [name, colour, difficulty, photo, locationId, creatorId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created boulder: ", { id: res.insertId });
        result(null, { id: res.insertId });
    });
};

Boulder.findById = (boulderId, userId, result) => {
    sql.query(`SELECT b.bezeichnung name, b.farbe colour, b.schwierigkeit difficulty, b.foto photo, b.ID_Location locationId, c.name creatorName, e.name lastChangeUserName, beass.erstellt lastChangeTimestamp, 
                   CASE
                       WHEN l.ID IS NOT NULL THEN "true"
                       ELSE "false" 
                   END isLikeAssigned
                   FROM boulder b 
                       INNER JOIN user c ON b.ID_Ersteller = c.ID 
                       LEFT JOIN bouldereditor_user_assigend beass ON b.ID = beass.ID_boulder
                       LEFT JOIN user e ON e.ID = beass.ID_User
                       LEFT JOIN boulderlike_user_assigend l ON l.ID_boulder = b.ID AND l.ID = ${userId}
                   WHERE  id = ${boulderId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found boulder: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Boulder with the id
        result({ kind: "not_found" }, null);
    });
};

Boulder.get = (userId, result) => {
    sql.query(`SELECT b.bezeichnung name, b.farbe colour, b.schwierigkeit difficulty, b.foto photo, b.ID_Location locationId, c.name creatorName, e.name lastChangeUserName, beass.erstellt lastChangeTimestamp, 
                   CASE
                       WHEN l.ID IS NOT NULL THEN "true"
                       ELSE "false" 
                   END isLikeAssigned
    FROM boulder b
    INNER JOIN user c ON b.ID_Ersteller = c.ID
    LEFT JOIN bouldereditor_user_assigend beass ON b.ID = beass.ID_boulder
    LEFT JOIN user e ON e.ID = beass.ID_User
    LEFT JOIN boulderlike_user_assigend l ON l.ID_boulder = b.ID AND l.ID = ${userId}`,
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

Boulder.updateById = (id, name, colour, difficulty, photo, locationId, changeUserId, result) => {
    sql.query(
        "UPDATE boulder SET bezeichnung = ?, farbe = ?, schwierigkeit = ?, foto = ?, ID_Location = ? WHERE ID = ?",
        [name, colour, difficulty, photo, locationId, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Boulder with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated boulder: ", { id: id});
            result(null, { id: id });
        }

    );
    sql.query(
        "INSERT INTO boulderEditor_User_Assigned (ID_boulder, ID_User)",
        [id, changeUserId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
        }

    );
};

module.exports = Boulder;