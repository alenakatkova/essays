const User = require("../models/User");

exports.getCurrentSession = async (req, res) => {
  try {
    const userId = req.session.user_id;
    const userInfo = await User.findById(userId).exec();

    res.status(200).json({
      status: "success",
      data: {
        userInfo,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
