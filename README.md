## USERS ENDPOINTS

- https://anywhere-health.herokuapp.com/api/users ----> allows you to "get" all registered users

- https://anywhere-health.herokuapp.com/api/users/:id ----> allows you to get a user by their specific ID

- https://anywhere-health.herokuapp.com/api/users/register -----> allows you to register a user with a hashed password(bcryptjs)

- schema for user creation

- "name": "jim",
- "password": "password",
- "email": "email@email", ---> optional
- "instructor": true ---> boolean that defaults to false

* https://anywhere-health.herokuapp.com/api/users/login -----> alllows a registered user to login, a token(jwt) is received upon login

* https://anywhere-health.herokuapp.com/api/users/:id ----> allows you to edit the fields of the user.

* https://anywhere-health.herokuapp.com/api/users/:id ----> allows you to delete a user by id.

## CLASSES

- schema for making a new class

* "name": "dance team zero", ----> required
* "type": "aerobic", ----> required
* "location": "cisco", ----> required
* "duration": "one hour",
* "intensity": "high",
* "max_size": "20", ----> required
* "starttime": "monday 11",
* "instructor_id": 1 ----> required

- https://anywhere-health.herokuapp.com/api/classes ----> allows you to get "all" classes

- https://anywhere-health.herokuapp.com/api/classes/:id ----> allows you to get specific classes by class id.

- https://anywhere-health.herokuapp.com/api/classes ----> allows you to post new classes(verified instructor)

- https://anywhere-health.herokuapp.com/api/classes/:id allows you to edit classes(instructor)

- https://anywhere-health.herokuapp.com/api/classes/:id allows you to delte classes by ID(instructor)

## CLIENT SPECIFIC

- https://anywhere-health.herokuapp.com/api/classes ----> allows a client to search for available classes

- https://anywhere-health.herokuapp.com/api/classes/join/:id ----> allows a client to add themselves to a class by class_id.

- https://anywhere-health.herokuapp.com/api/classes/drop/:id ----> allows a client to remove/drop a class with a specific class_id

- https://anywhere-health.herokuapp.com/api/classes/client/:id ----> allows the client the ability to search for the classes in which they are in by user_id.
