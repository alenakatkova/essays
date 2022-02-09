const Language = require("../models/Language");

exports.getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json({
      status: "success",
      results: languages.length,
      data: {
        languages,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getOneLanguage = async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        language,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
