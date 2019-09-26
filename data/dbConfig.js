const knex = require("knex");

// const secrets = require("../config/secrets.js");

// const environment = secrets.environment || "development";
// const knexConfig = require("../knexfile.js")[environment];
const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig);


module.exports = knex(knexConfig.development);

// change made for testing below original above

// module.exports = knex(knexConfig[process.env.DB_ENV || "development"]);
