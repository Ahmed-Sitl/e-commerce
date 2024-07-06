const express = require("express");

const routes = express.Router();
const {
  getPostValidator,
  createPostValidator,
  updatePostValidator,
  deletePostValidator,
} = require("../utils/validators/postValidator");
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../services/postService");

routes.route("/").post(createPostValidator, createPost).get(getPosts);
routes
  .route("/:id")
  .get(getPostValidator, getPost)
  .put(updatePostValidator, updatePost)
  .delete(deletePostValidator, deletePost);

module.exports = routes;
