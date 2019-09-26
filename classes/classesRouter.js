const router = require("express").Router();

const restricted = require("../auth/restricted.js");
const instructoOnly = require('../auth/InstructorOnly.js')

const Classes = require("./classesModel.js");

// get all classes

router.get("/", restricted, (req, res) => {
  Classes.find()
    .then(response => {
      response.map(newClass => {
        if (newClass.instructor === 0) {
          newClass.instructor = false;
        } else {
          newClass.instructor = true;
        }
        return newClass;
      });
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// get classes by id

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Classes.findById(id)
    .then(classes => {
      if (classes) {
        res.json(classes);
      } else {
        res.status(404).json({ message: "could not find class with that id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "failed ot get classes" });
    });
});

// instructor add

router.post("/", restricted, (req, res) => {
  const classData = req.body;

  Classes.add(classData)
    .then(resClass => {
      res.status(201).json(resClass);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new class" });
    });
});

// instructor change
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Classes.findById(id)
    .then(classres => {
      if (classres) {
        Classes.update(changes, id).then(updatedClasses => {
          res.json(updatedClasses);
        });
      } else {
        res.status(404).json({ message: "Could not find class with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update class" });
    });
});

// instructor delete
router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Classes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find Classes with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete Classes" });
    });
});

// user adds themselves to class by class id user removes themselves from class by class id

// router.post("/join/:id", (req, res) => {
//   const id = req.params.id;
//   const user = req.body;

//   console.log(id);
//   Classes.studentsByClass(id)
//     .then(classes => {
//       console.log("test", classes);
//       if (classes) {
//         Classes.insertUserToCLass(user, id).then(users => {
//           res.status(201).json(users);
//           console.log(user);
//         });
//       } else {
//         res.status(404).json({ message: "couldnn't add user to class" });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: "error user not added" });
//     });
// });
// attempted fix of local vs heroku issue

router.post("/join/:id", async (req, res) => {
  const class_id = parseInt(req.params.id);
  const user_id = parseInt(req.body);
  const classes = { class_id, user_id };
  try {
    await Classes.insertUserToCLass(classes);
    res.status(201).json({ message: "yes you did it" });
  } catch (err) {
    res.status(500).json({ message: "no no", err });
  }
});

router.delete("/drop/:id", (req, res) => {
  const id = req.params.id;
  const user_id = req.body;

  Classes.removeClient(id, user_id)
    .then(classes => {
      res.status(200).json(classes);
    })
    .catch(err => {
      res.status(500).json({ message: "client still enrolled in class" });
    });
});

router.get("/client/:id", (req, res) => {
  const id = req.params.id;

  Classes.studentsByClass(id)
    .then(classes => {
      if (classes.length >= 1) {
        res.status(200).json(classes);
      } else {
        res.status(404).json({ message: "could not find class for user" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "error getting classes for this client" });
    });
});

module.exports = router;
