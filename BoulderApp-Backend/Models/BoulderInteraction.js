const sql = require("../database");

// constructor
const BoulderInteraction = function(boulderInteraction) {
    this.comment = boulderInteraction.comment;
    this.status = boulderInteraction.status;
    this.userName = boulderInteraction.userName;
};


BoulderInteraction.getRecent = async (boulderId, result) => {
    try {
        const dbResult = await sql.promise().query("SELECT a.ID, a.Kommentar comment, a.status, b.name userName, a.Erstellt createDate FROM boulderinteraction_user_assigned a, user b WHERE a.ID_User = b.ID AND a.ID_Boulder = ? ORDER BY Erstellt DESC"
        , [boulderId]);
        result(null,200,dbResult[0])
    } catch (error) {
        console.log(error);
        result(500)
    }
    
};

BoulderInteraction.create = async (boulderId, userId, comment, status, result) => {
    try {
        await sql.promise().query("INSERT INTO boulderinteraction_user_assigned (ID_Boulder, ID_User, Kommentar, Status) VALUES (?,?,?,?)", [boulderId, userId, comment, status], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
    
            console.log("created interaction: ", { id: res.insertId });
            result(null, { id: res.insertId });
        });
    } catch (error) {
        console.log(error)
        result(500);
    }
    
};

BoulderInteraction.updateById = async (id, boulderInteraction, result) => {
    try {
        await sql.promise().query(
            "UPDATE boulderinteraction_user_assigned SET kommentar = ?, status = ? WHERE id = ?",
            [boulderInteraction.comment, boulderInteraction.status, id]);
        console.log("updated interaction: ", { id: id, ...boulderInteraction });
        result(null, 200);
        
    } catch (error) {
        console.log(error);
        result(500);
    }
    
};

module.exports = BoulderInteraction;