const knex = require("knex");

const secrets = require("../config/secrets.js");

const environment = secrets.environment || "development";
const knexConfig = require("../knexfile.js")[environment];


module.exports = knex(knexConfig);




// change made for testing below original above -- not implemented

// module.exports = knex(knexConfig[process.env.DB_ENV || "development"]);



// below this works for testing above is a revert to when data persisted

// const knex = require("knex");

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);