const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("../users/usersRouter.js");
const classRouter = require("../classes/classesRouter.js");

const server = express();

server.use(logger);
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api/users", classRouter);

server.get("/", (req, res) => {
  res.json({ message: "up up and BUILD WEEK!!!" });
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "host"
    )}`
  );
  next();
}

module.exports = server;
