const User = require("../models/User");

exports.getCurrentSession = async (req, res) => {
  try {
    const userId = req.session.user_id;

    res.status(200).json({
      status: "success",
      data: {
        user: userId,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
