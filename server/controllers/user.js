const User = require("../models/User");
const Essay = require("../models/Essay");
const bcrypt = require("bcryptjs");

exports.getUserEssays = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const essays = await Promise.all(
      user.essays.map((id) => {
        return Essay.findById(id.toString());
      })
    );

    res.status(200).json({
      status: "success",
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

exports.getFavAuthorsEssays = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const favAuthors = await Promise.all(
      user.favouriteAuthors.map((id) => {
        return User.findById(id.toString());
      })
    );

    const favAuthorsEssaysIds = favAuthors.reduce((acc, curr) => {
      return [...acc, ...curr.essays];
    }, []);

    const essays = await Promise.all(
      favAuthorsEssaysIds.map((id) => {
        return Essay.findById(id.toString());
      })
    );

    res.status(200).json({
      status: "success",
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

exports.getBookmarkedEssays = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const essays = await Promise.all(
      user.bookmarks.map((bookmark) => {
        return Essay.findById(bookmark.essay_id.toString());
      })
    );

    res.status(200).json({
      status: "success",
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

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = await User.create({ username, password: hashPassword });
    req.session.user_id = newUser._id;
    res.status(201).json({
      status: "success",
      data: {
        user: newUser._id,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.logIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        status: "fail",
        message: "user not found",
      });

      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      req.session.user_id = user._id;
      res.status(201).json({
        status: "success",
        data: {
          user: user._id,
        },
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "incorrect username or password",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.logOut = async (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Unable to log out");
      } else {
        res.send("Logout successful");
      }
    });
  } else {
    res.end();
  }
};

exports.updateWritingSettings = async (req, res, next) => {
  const { writingSettings } = req.body;
  try {
    const user = await User.findById(req.params.id);
    user.writingSettings.timingInMinutes = writingSettings.timingInMinutes;
    user.writingSettings.language_id = writingSettings.language_id;
    user.writingSettings.test_id = writingSettings.test_id;
    user.writingSettings.level_id = writingSettings.level_id;
    user.writingSettings.minAmountOfWords = writingSettings.minAmountOfWords;
    user.save();
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.postDraft = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    user.drafts.push(req.body);
    user.save();

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
