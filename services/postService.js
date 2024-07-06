const asyncHandler = require("express-async-handler");
const PostMoudel = require("../models/postModel");
const ApiError = require("../utils/apiError");

// craete a new Post
exports.createPost = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const { slng } = req.body;
  const { user } = req.body;
  const Post = await PostMoudel.create({ name, slng, user });
  res.status(201).json({ status: "success", Post });
});

// get all Post
exports.getPosts = asyncHandler(async (req, res) => {
  const page = 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  const Post = await PostMoudel.find({})
    .skip(page)
    .skip(skip)
    .limit(limit)
    .populate({ path: "user", select: "name" });
  res.status(200).json({ result: Post.length, page, status: Post });
});

// get a Post by id
exports.getPost = asyncHandler(async (req, res, next) => {
  const Post = await PostMoudel.findById(req.params.id);
  if (!Post) return next(new ApiError("Post not found", 404));

  res.status(200).json({ status: Post });
});

// update Post by id
exports.updatePost = asyncHandler(async (req, res, next) => {
  const Post = await PostMoudel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!Post) return next(new ApiError("Post not found", 404));

  res.status(200).json({ status: Post });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const Post = await PostMoudel.findByIdAndDelete(req.params.id, {
    new: true,
  });
  if (!Post) return next(new ApiError("Post not found", 404));
  res.status(200).json({ status: Post });
});
