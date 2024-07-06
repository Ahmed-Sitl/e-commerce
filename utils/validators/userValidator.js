const { check } = require("express-validator");
const validatorMiddlerware = require("../../middlware/vaildator");

exports.getUserValidator = [
  check("id").isMongoId().withMessage("Invalid category id"),
  validatorMiddlerware,
];

exports.createUserValidator = [
  check("name")
    .notEmpty()
    .withMessage("User name required")
    .isLength({ min: 2 })
    .withMessage("user is Too shrot")
    .isLength({ max: 10 })
    .withMessage("user is Too lange"),
  check("slng").isLength({ max: 10 }).withMessage("slng is Too lange"),
  check("phone")
    .isMobilePhone("ar-YE")
    .withMessage("is phone number is not right"),
  validatorMiddlerware,
];

exports.updateUserValidator = [
  check("id").isMongoId().withMessage("Invalid user id format"),
  check("name")
    .notEmpty()
    .withMessage("User name required")
    .isLength({ min: 2 })
    .withMessage("user is Too shrot")
    .isLength({ max: 10 })
    .withMessage("user is Too lange"),
  check("slng").isLength({ max: 2 }).withMessage("slng is Too lange"),
  validatorMiddlerware,
];

exports.deleteUserValidator = [
  check("id").isMongoId().withMessage("Invalid user id format"),
  validatorMiddlerware,
];
