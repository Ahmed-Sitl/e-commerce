const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const db = require("./config/DB");
const users = require("./routes/usersRoute");
const post = require("./routes/postRoute");
const errorHandler = require("./middlware/errorHandler");
const ApiError = require("./utils/apiError");

dotenv.config({ path: "config.env" });

// use express
const app = express();

// connect to database
db();

//middule ware
app.use(express.json());

// check if type env
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// user routes
app.use("/add", users);
app.use("/post", post);

// handle 404 error
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route ${req.originalUrl}`, 404));
});

// global error handling middleware
app.use(errorHandler);

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

// Events ==> list ==> callback(err)
process.on("unhandledRejection", (err) => {
  console.error(`UnhandRejection Errors: ${err.name} | ${err.message} `);
  server.close(() => {
    console.error("Shutting down ...");
    process.exit(1);
  });
});
