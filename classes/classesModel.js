const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("classes");
}

function findById(id) {
  return db("classes").where({ id });
}

function add(newclass) {
  return db("classes").insert(newclass);
}

function update(changes, id) {
  return db("classes")
    .update(changes)
    .where({ id });
}

function remove(id) {
  return db("classes")
    .del()
    .where({ id });
}
