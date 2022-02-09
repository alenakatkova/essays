const Test = require("../models/test");

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json({
      status: "success",
      results: tests.length,
      data: {
        tests,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getOneTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        test,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
