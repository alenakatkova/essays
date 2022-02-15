const mongoose = require("mongoose");
const writingSettingsSchema = require("./WritingSettings");

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
      required: [true, "Essay must have title"],
    },
    body: {
      type: String,
      required: [true, "Essay must have body"],
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
  },
  { timestamps: true }
);

const Essay = mongoose.model("Essay", essaySchema);
module.exports = Essay;
