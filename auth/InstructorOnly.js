const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token.instructor) {
    next();
  } else {
    res.status(500).json({ message: 'instructor only enters' })
  }
}