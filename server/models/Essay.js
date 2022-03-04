const mongoose = require("mongoose");
const writingSettingsSchema = require("./WritingSettings");
const ratingSchema = require("./Rating");

const essaySchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: [true, "Topic should be chosen"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "MainPage must have title"],
    },
    body: {
      type: String,
      required: [true, "MainPage must have body"],
    },
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
    writingSettings: writingSettingsSchema,
    ratings: [ratingSchema],
  },
  { timestamps: true }
);

const Essay = mongoose.model("Essay", essaySchema);
module.exports = Essay;
