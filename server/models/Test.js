const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Test must have id"],
  },
  name: {
    type: String,
    required: [true, "Test must have name"],
  },
  url: {
    type: String,
    required: [true, "Test must have url"],
  },
  languages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Language",
    },
  ],
});

const Test = mongoose.model("Test", testSchema);
module.exports = Test;
