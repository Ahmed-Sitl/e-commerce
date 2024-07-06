const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} = require("../utils/validators/userValidator");
const {
  createUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../services/usersService");
const express = require("express");
const routes = express.Router();

routes.route("/").post(createUserValidator, createUsers).get(getUsers);
routes
  .route("/:id")
  .get(getUserValidator, getUser)
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);
module.exports = routes;
