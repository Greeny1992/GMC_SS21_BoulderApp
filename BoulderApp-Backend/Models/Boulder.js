const sql = require("../database");

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

Boulder.create = async (name, colour, difficulty, photo, locationId, creatorId, result) => {
    let boulderId;
    try {
        const data = await sql.promise().query("INSERT INTO boulder (bezeichnung, farbe, schwierigkeit, foto, ID_Location, ID_Ersteller) VALUES (?,?,?,?,?,?); ", [name, colour, difficulty, photo, locationId, creatorId]);
        boulderId = data[0].insertId;
        await sql.promise().query(
            "INSERT INTO bouldereditor_user_assigned (ID_boulder, ID_User) VALUES (?,?)",
            [boulderId, creatorId],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null, null);
                    return;
                }
            }
    
        );
        result(null,200, boulderId)
    } catch (error) {
        console.log(error)
        result(500)
    }
    
};

Boulder.get = (userId, result) => {
    sql.query(`SELECT b.ID boulderId, b.bezeichnung name, b.farbe colour, b.schwierigkeit difficulty, b.foto photo, b.ID_Location locationId, c.name creatorName, e.name lastChangeUserName, beass.erstellt lastChangeTimestamp, 
                   CASE
                       WHEN l.ID IS NOT NULL THEN "true"
                       ELSE "false" 
                   END isLikeAssigned
    FROM boulder b
    INNER JOIN user c ON b.ID_Ersteller = c.ID
    LEFT JOIN bouldereditor_user_assigned beass ON b.ID = beass.ID_boulder
    LEFT JOIN user e ON e.ID = beass.ID_User
    LEFT JOIN boulderlike_user_assigned l ON l.ID_boulder = b.ID AND l.ID = ${userId}`,
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

Boulder.updateById = async (id, name, colour, difficulty, photo, locationId, changeUserId, result) => {
    await sql.promise().query(
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
    sql.promise().query(
        "INSERT INTO bouldereditor_user_assigned (ID_boulder, ID_User) VALUES (?,?)",
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