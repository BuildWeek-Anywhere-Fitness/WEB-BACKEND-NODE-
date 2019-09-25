const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = require("../config/secrets.js");
const Users = require("./usersModel.js");
const restricted = require("../auth/restricted.js");

// get all users

// router.get("/", (req, res) => {
//   Users.find()
//     .then(response => {
//       response.map(newClass => {
//         if (newClass.instructor === 0) {
//           newClass.instructor = false;
//         } else {
//           newClass.instructor = true;
//         }
//         return newClass;
//       });
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get users" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(users => {
      if (users) {
        res.json(users);
      } else {
        res.status(404).json({ message: "couldn't get user by id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get user by id" });
    });
});

// register user
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log(user);
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// login user
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
    .then(classres => {
      if (classres) {
        Classes.update(changes, id).then(updatedClasses => {
          res.json(updatedClasses);
        });
      } else {
        res.status(404).json({ message: "Could not find Users with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update User" });
    });
});

// delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find Userss with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete Users" });
    });
});

function generateToken(user) {
  const payload = {
    usersname: user.username,
    id: user.id
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
