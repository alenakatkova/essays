const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Like must have an id"],
  },
  essay_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Essay",
  },
  comment: {
    type: String,
  },
});

module.exports = bookmarkSchema;
