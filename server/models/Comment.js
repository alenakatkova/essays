const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    essay_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Essay",
    },
    body: {
      type: String,
      required: [true, "Comment must have body"],
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
