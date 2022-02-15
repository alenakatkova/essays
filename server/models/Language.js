const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Language must have id"],
  },
  i18n: {
    type: String,
    required: [true, "Language must have i18n ref for translation"],
  },
  code: {
    type: String,
    required: [true, "Language must have code"],
  },
  tests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
    },
  ],
});

const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
