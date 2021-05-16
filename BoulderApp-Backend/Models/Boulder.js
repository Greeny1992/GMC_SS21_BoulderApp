const sql = require("../database");

// constructor
const Boulder = function (boulder) {
  this.name = boulder.name;
  this.colour = boulder.colour;
  this.difficulty = boulder.difficulty;
  this.photo = boulder.photo;
  this.locationId = boulder.locationId;
  this.creatorName = boulder.creatorName;
  this.lastChangeUserName = boulder.lastChangeUserName;
  this.lastChangeTimestamp = boulder.lastChangeTimestamp;
};

Boulder.create = async (
  name,
  colour,
  difficulty,
  locationId,
  creatorId,
  result
) => {
  let boulderId;
  try {
    const data = await sql
      .promise()
      .query(
        "INSERT INTO boulder (bezeichnung, farbe, schwierigkeit, ID_Location, ID_Ersteller, Letzte_Bearbeiter) VALUES (?,?,?,?,?,?); ",
        [name, colour, difficulty, locationId, creatorId, creatorId]
      );
    boulderId = data[0].insertId;
    result(null, 200, boulderId);
  } catch (error) {
    console.log(error);
    result(500);
  }
};

Boulder.get = (userId, result) => {
  sql.query(
    `SELECT b.ID boulderId, b.bezeichnung name, b.farbe colour, b.schwierigkeit difficulty, b.ID_Location locationId, b.Letzte_Bearbeiter lastChangeUserName, b.Letzte_Bearbeitung lastChangeTimestamp, 
    (CASE
        WHEN l.ID IS NOT NULL THEN "true"
        ELSE "false" 
    END) AS isLikeAssigned FROM boulder b
    LEFT JOIN boulderlike_user_assigned l ON l.ID_boulder = b.ID AND l.ID_User = ${userId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("users: ", res);
      result(null, res);
    }
  );
};

Boulder.updateById = async (
  id,
  name,
  colour,
  difficulty,
  locationId,
  userId,
  force,
  lastChangeDate,
  result
) => {
  if (!force) {
    const oldData = await sql
      .promise()
      .query(
        "SELECT b.Letzte_Bearbeitung as Letzte_Bearbeitung, u.Name as UserName FROM boulder as b JOIN user as u ON b.Letzte_Bearbeiter = u.ID WHERE b.ID = ?",
        [id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null, null);
            return;
          }
          return res;
        }
      );
    const oldDataLastChange = oldData[0][0].Letzte_Bearbeitung;
    const oldDataLastEditor = oldData[0][0].UserName;
    if(oldDataLastChange.toISOString() != lastChangeDate) {
      console.log("not same date");
      result(null, 409, {
        id: id,
        name: name,
        colour: colour,
        difficulty: difficulty,
        locationId: locationId,
        userId: userId,
        lastChangeDate: oldDataLastChange,
        lastChangeEditor: oldDataLastEditor
      })
      return;
    }
  }

  const res = await sql
    .promise()
    .query(
      "UPDATE boulder SET bezeichnung = ?, farbe = ?, schwierigkeit = ?, ID_Location = ?, Letzte_Bearbeiter = ?, Letzte_Bearbeitung = ? WHERE ID = ?",
      [
        name,
        colour,
        difficulty,
        locationId,
        userId,
        new Date().toISOString().slice(0, 19).replace("T", " "),
        id,
      ]
    );
  result(null, 200, res);
};

module.exports = Boulder;
