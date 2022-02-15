const Level = require("../models/Level");

exports.getLevels = async (req, res) => {
  try {
    const levels = await Level.find();
    res.status(200).json({
      status: "success",
      results: levels.length,
      data: {
        levels,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getOneLevel = async (req, res) => {
  try {
    const level = await Level.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        level,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
