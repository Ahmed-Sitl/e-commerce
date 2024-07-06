const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
      unique: false,
      trim: true,
    },
    slng: {
      type: String,
      required: false,
      minlength: 5,
      maxlength: 20,
      unique: false,
      trim: true,
    },
    phone: String,
    // profileImg: String,
    password: {
      type: String,
      required: [false, "passwrod required"],
      minlenght: [6, "Too short password"],
    },
    // role: {
    //   type: String,
    //   enum: ["user", "admin"],
    //   default: "user",
    // },
  },
  { timestamps: true }
);

// create the schema
const userMoudel = mongoose.model("users", usersSchema);

module.exports = userMoudel;
