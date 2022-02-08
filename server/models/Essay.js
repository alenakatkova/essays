const mongoose = require("mongoose");

const essaySchema = new mongoose.Schema(
  {
    minAmountOfWords: {
      type: Number,
      required: [true, "Word amount requirement should be set"],
    },
    language: {
      type: String,
      required: [true, "Language should be chosen"],
    },
    test: {
      type: String,
      required: [true, "Test should be chosen"],
    },
    timingInMinutes: {
      type: Number,
      required: [true, "Time limitation should be set"],
    },
    topic: {
      type: String,
      required: [true, "Topic should be chosen"],
    },
    user_id: {
      type: String,
      required: [true, "Essay must have author"],
    },
    title: {
      type: String,
      required: [true, "Essay must have title"],
    },
    body: {
      type: String,
      required: [true, "Essay must have body"],
    },
  },
  { timestamps: true }
);

const Essay = mongoose.model("Essay", essaySchema);
module.exports = Essay;
