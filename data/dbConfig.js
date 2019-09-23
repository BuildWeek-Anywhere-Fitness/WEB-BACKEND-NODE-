const knex = require("knex");

const secrets = require("../config/secrets.js");

const environment = secrets.environment || "development";
const knexConfig = require("../knexfile.js")[environment];

module.exports = knex(knexConfig);
