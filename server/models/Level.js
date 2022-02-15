const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Level must have id"],
  },
  name: {
    type: String,
    required: [true, "Level must have name"],
  },
});

const Level = mongoose.model("Level", levelSchema);
module.exports = Level;
