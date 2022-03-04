const User = require("../models/User");
const Essay = require("../models/Essay");
const Language = require("../models/Language");
const Test = require("../models/Test");
const Level = require("../models/Level");
const writingSettingsSchema = require("../models/WritingSettings");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

exports.getUserEssays = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const essays = await Promise.all(
      user.essays.map((id) => {
        return Essay.aggregate()
          .match({ _id: id })
          .lookup({
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "author",
          })
          .lookup({
            from: "languages",
            localField: "writingSettings.language_id",
            foreignField: "_id",
            as: "language",
          })
          .lookup({
            from: "levels",
            localField: "writingSettings.level_id",
            foreignField: "_id",
            as: "level",
          })
          .lookup({
            from: "tests",
            localField: "writingSettings.test_id",
            foreignField: "_id",
            as: "test",
          });
      })
    );

    const result = await essays
      .map((essayArray) => essayArray[0])
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({
      status: "success",
      data: {
        essays: result,
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
        return Essay.aggregate()
          .match({ _id: id })
          .lookup({
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "author",
          })
          .lookup({
            from: "languages",
            localField: "writingSettings.language_id",
            foreignField: "_id",
            as: "language",
          })
          .lookup({
            from: "levels",
            localField: "writingSettings.level_id",
            foreignField: "_id",
            as: "level",
          })
          .lookup({
            from: "tests",
            localField: "writingSettings.test_id",
            foreignField: "_id",
            as: "test",
          });
      })
    );

    const result = await essays
      .map((essayArray) => essayArray[0])
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({
      status: "success",
      data: {
        essays: result,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getLikedEssays = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const essays = await Promise.all(
      user.likes.map((id) => {
        return Essay.aggregate()
          .match({ _id: id })
          .lookup({
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "author",
          })
          .lookup({
            from: "languages",
            localField: "writingSettings.language_id",
            foreignField: "_id",
            as: "language",
          })
          .lookup({
            from: "levels",
            localField: "writingSettings.level_id",
            foreignField: "_id",
            as: "level",
          })
          .lookup({
            from: "tests",
            localField: "writingSettings.test_id",
            foreignField: "_id",
            as: "test",
          });
      })
    );
    const result = await essays
      .map((essayArray) => essayArray[0])
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.status(200).json({
      status: "success",
      data: {
        essays: result,
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

  const WritingSettingsModel = mongoose.model(
    "WritingSettings",
    writingSettingsSchema
  );

  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const language = await Language.find({ i18n: "english" });

    const test = await Test.find({ abbreviation: "TOEFL" }).exec();
    const level = await Level.find({ name: "C1" }).exec();
    const newWritingSettings = new WritingSettingsModel({
      _id: new mongoose.Types.ObjectId(),
      timingInMinutes: 20,
      language_id: language[0]._id.toString(),
      test_id: test[0]._id.toString(),
      level_id: level[0]._id.toString(),
      minAmountOfWords: 200,
    });
    const newUser = await User.create({
      username,
      password: hashPassword,
      writingSettings: newWritingSettings,
    });
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
    const newDraft = user.drafts.create(req.body);
    user.drafts.push(newDraft);
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

exports.likeEssay = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    user.likes.push(req.body.essayId);
    user.save();
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

exports.dislikeEssay = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const index = user.likes.indexOf(req.body.essayId);
    if (index > -1) {
      user.likes.splice(index, 1);
    }
    user.save();
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

exports.addAuthorToFavourite = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    user.favouriteAuthors.push(req.body.authorId);
    user.save();
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

exports.deleteAuthorFromFavourites = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const index = user.favouriteAuthors.indexOf(req.body.authorId);
    if (index > -1) {
      user.favouriteAuthors.splice(index, 1);
    }
    user.save();
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
