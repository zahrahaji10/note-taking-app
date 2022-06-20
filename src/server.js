// external imports
const express = require("express");
const path = require("path");

// internal imports
const routes = require("./routes");

// declare logger middleware function to track requests
// const logger = (req, res, next) => {
//   // get the request method
//   const method = req.method;
//   const path = req.path;

//   // log method and path of request
//   console.log(`[INFO]: ${method} request for ${path}`);

//   // call next fn to execute next middleware
//   next();
// };

// create express instance for app
const app = express();

// declare port
const PORT = 4000;

// middleware functions
// app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(routes);

// listen to requests
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
