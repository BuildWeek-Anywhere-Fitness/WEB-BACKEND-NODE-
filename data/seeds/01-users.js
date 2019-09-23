const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Kaylee",
          password: bcrypt.hashSync("test", 8),
          instructor: true
        },
        {
          username: "Veronica",
          password: bcrypt.hashSync("test", 8),
          instructor: true
        },
        {
          username: "Steven",
          password: bcrypt.hashSync("test", 8),
          instructor: false
        }
      ]);
    });
};
