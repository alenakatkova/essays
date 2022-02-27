const mongoose = require("mongoose");
const writingSettingsSchema = require("./WritingSettings");
const draftSchema = require("./Draft");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User must have a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
  },
  writingSettings: writingSettingsSchema,
  drafts: [draftSchema],
  essays: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Essay",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  editSuggestionsComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EditSuggestionsComments",
    },
  ],
  favouriteAuthors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Essay",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
