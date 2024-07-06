const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      unique: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      require: [true, "userId must be belong to parent cateogry"],
    },
  },
  { timestamps: true }
);

// create the schema
const postMoudle = mongoose.model("post", postsSchema);

module.exports = postMoudle;
