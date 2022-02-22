const Essay = require("../models/Essay");
const User = require("../models/User");

exports.getAllEssays = async (req, res, next) => {
  try {
    const essays = await Essay.find();
    console.log(req.originalUrl);
    res.status(200).json({
      status: "success",
      results: essays.length,
      data: {
        essays,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getOneEssay = async (req, res, next) => {
  try {
    const essay = await Essay.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        essay,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.createEssay = async (req, res, next) => {
  try {
    const essay = await Essay.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        essay,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

exports.updateEssay = async (req, res, next) => {
  try {
    const essay = await Essay.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        essay,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.deleteEssay = async (req, res, next) => {
  try {
    const essay = await Essay.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
