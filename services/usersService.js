const asyncHandler = require("express-async-handler");
const userMoudel = require("../models/userModel");
const ApiError = require("../utils/apiError");

// craete a new user
exports.createUsers = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const slng = req.body.slng;
  const phone = req.body.phone;
  const user = await userMoudel.create({ name, slng, phone });
  res.status(201).json({ status: "success", user });
});

// get all users
exports.getUsers = asyncHandler(async (req, res) => {
  const page = 1;
  const limit = 50;
  const skip = (page - 1) * limit;
  const users = await userMoudel.find({}).skip(page).skip(skip).limit(limit);
  res.status(200).json({ result: users.length, page, status: users });
});

// get a user by id
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await userMoudel.findById(req.params.id);
  if (!user) return next(new ApiError("User not found", 404));

  res.status(200).json({ status: user });
});

// update user by id
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await userMoudel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return next(new ApiError("User not found", 404));

  res.status(200).json({ status: user });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await userMoudel.findByIdAndDelete(req.params.id, {
    new: true,
  });
  if (!user) return next(new ApiError("User not found", 404));
  res.status(200).json({ status: user });
});
