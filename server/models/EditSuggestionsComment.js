const mongoose = require("mongoose");

const editSuggestionsCommentSchema = new mongoose.Schema(
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

const EditSuggestionsComment = mongoose.model(
  "EditSuggestionsComment",
  editSuggestionsCommentSchema
);
module.exports = EditSuggestionsComment;
