const mongoose = require("mongoose");

const writingSettingsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Writing settings must have an id"],
  },
  minAmountOfWords: {
    type: Number,
    required: [true, "Word amount requirement should be set"],
  },
  timingInMinutes: {
    type: Number,
    required: [true, "Time limitation should be set"],
  },
  level_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level",
  },
  language_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  },
  test_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
});

module.exports = writingSettingsSchema;
