exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username", 128)
      .notNullable()
      .unique();
    tbl.string("password", 128).notNullable();
    tbl.string("email");
    tbl.boolean("instructor").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};