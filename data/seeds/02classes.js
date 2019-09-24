exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("classes").insert([
        {
          name: "daily method",
          type: "physical",
          location: "New Mexico",
          duration: "1 hour",
          intensity: "high",
          instructor_id: 1
        },
        {
          name: "peoloton",
          type: "aerobic",
          duration: "1 hour",
          intensity: "high",
          location: "chicago",
          instructor_id: 1
        },
        {
          name: "boxing",
          type: "aerobic",
          duration: "1 hour",
          type: "aerobic",
          location: "new york",
          instructor_id: 2
        },
        {
          name: "gymnastics",
          type: "aerobic",
          duration: "1 hour",
          type: "aerobic",
          location: "Glen Ellyn",
          instructor_id: 2
        }
      ]);
    });
};
