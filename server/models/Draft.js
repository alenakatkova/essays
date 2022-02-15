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
      required: [true, "Essay must have title"],
    },
    body: {
      type: String,
      required: [true, "Essay must have body"],
    },
    writingSettings: writingSettingsSchema,
  },
  { timestamps: true }
);

module.exports = draftSchema;
