const { check } = require("express-validator");
const validatorMiddlerware = require("../../middlware/vaildator");

exports.getPostValidator = [
  check("id").isMongoId().withMessage("Invalid user id"),
  validatorMiddlerware,
];

exports.createPostValidator = [
  check("name")
    .notEmpty()
    .withMessage("Post name required")
    .isLength({ min: 2 })
    .withMessage("Post is Too lange"),
  check("user")
    // .notEmpty()
    // .withMessage("Post user required")
    .isMongoId()
    .withMessage("this user is required or is not exist"),
  validatorMiddlerware,
];

exports.updatePostValidator = [
  check("id").isMongoId().withMessage("Invalid Post id format"),
  check("name")
    .notEmpty()
    .withMessage("Post name required")
    .isLength({ min: 2 })
    .withMessage("Post is Too lange"),
  check("slng").isLength({ max: 2 }).withMessage("slng is Too lange"),
  validatorMiddlerware,
];

exports.deletePostValidator = [
  check("id").isMongoId().withMessage("Invalid Post id format"),
  validatorMiddlerware,
];
