const mongoose = require("mongoose");
const writingSettingsSchema = require("./WritingSettings");

const draftSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: [true, "Topic should be chosen"],
    },
    title: {
      type: String,
      required: [true, "Draft must have title"],
    },
    body: {
      type: String,
      required: [true, "Draft must have body"],
    },
  },
  { timestamps: true }
);

module.exports = draftSchema;
