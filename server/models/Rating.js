const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  mark: {
    type: Number,
    required: [true, "Mark must be set"],
  },
});

module.exports = ratingSchema;
