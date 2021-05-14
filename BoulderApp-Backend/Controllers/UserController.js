const { validationResult } = require("express-validator");
const db = require("../database");

exports.logIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { email, password } = req.body;
  try {
    const dbResult = await db.promise().query("SELECT * FROM user WHERE email = ? AND password = ?", [
      email,
      password,
    ]);
    if(dbResult[0].length > 0){
        const user = dbResult[0][0]
        console.log(user)
        res.status(200).json({
            user,
          });
    } else {
        res.status(400).send("E-Mail oder Passwort falsch")
    }

  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
