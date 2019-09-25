const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  studentsByClass,
  removeClient,
  insertUserToCLass
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

function studentsByClass(id) {
  return db("users_classes")
    .join("users", "users.id", "users_classes.user_id")
    .join("classes", "classes.id", "users_classes.class_id")
    .where({ class_id: id });
}

// function studentsByClass(id) {
//   return db("users_classes")
//     .join("users", "users.id", "user_classes.user_id")
//     .join("classes", "classes.id", "users_classes.class_id")
//     .where("classes.id", id);
// }

function insertUserToCLass(user, id) {
  return db("users_classes").insert({ class_id: id, user_id: user });
  // .then(([newusers]) => findById(id));
}

function removeClient(id, user_id) {
  return db("users_classes")
    .first()
    .del()
    .where({ class_id: id, user_id: user_id });
}

// function getbyID(id) {
//   return db("users_classes")
//     .where({ id })
//     .first()
//     .then(users => {
//       return Users.getByOwnerID(id).then(classes => {
//         return { ...users, classes: classes };
//       });
//     });
// }
