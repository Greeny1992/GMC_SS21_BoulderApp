const { validationResult } = require("express-validator");

exports.logIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { email, password } = req.body;
  try {
    const user = {
        id: 1,
    };

    res.status(200).json({
      user,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};
