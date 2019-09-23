const knex = require("knex");

const environment = secrets.environment || "development";
const knexConfig = require("../knexfile.js")[environment];

module.exports = knex(knexConfig.development);
