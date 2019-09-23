exports.up = function(knex) {
  return knex.schema
    .createTable("classes", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("type", 128).notNullable();
      tbl.string("duration", 128);
      tbl.string("intensity", 128);
      tbl.string("location", 128).notNullable();
      tbl
        .integer("instructor_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("users_classes", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("class_id")
        .unsigned()
        .references("id")
        .inTable("classes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("registered");
    });
};

exports.down = function(knex) {};
