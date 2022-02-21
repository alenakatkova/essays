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
  // TODO сделать айдишкой эссе айдишку бумарки, добавить коммент в каждое эссе
  try {
    const essays = [
      {
        _id: "essay01",
        topic: "Carte géographique",
        user_id: "user01",
        title: "Types de carte+++",
        body:
          "Les cartes géographiques peuvent être classée en trois types :\n" +
          "\n" +
          "Les cartes topographiques qui recensent et décrivent de façon précise et détaillée les éléments naturels du terrain, tel le relief, l’hydrographie en utilisant une symbologie conventionnelles : courbes de niveau, relief ombré, traits bleus pour représenter les cours d’eau. Dans ce type de carte, une attention particulière est accordée au positionnement précis des objets représentés.",
        comments: [],
        editSuggestionsComments: [],
        writingSettings: {},
        createdAt: "2022-02-19T20:25:59.949Z",
        updatedAt: "2022-02-19T20:25:59.949Z",
      },
    ];
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
