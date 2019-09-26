const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "another",
      (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "Tyler you need a Token!" });
        } else {
          req.user = { username: decodedToken.username };
          next();
        }
      }
    );
  } else {
    res.status(400).json({ message: "no credentials provided" });
  }
};
