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
    console.log("bla");

    res.status(200).json({
      status: "success",
      data: {
        essays: [
          {
            _id: "ldhgk",
            topic: "Carte géographique",
            user_id: "ldkf",
            title: "Types de carte",
            body:
              "Les cartes géographiques peuvent être classée en trois types :\n" +
              "\n" +
              "Les cartes topographiques qui recensent et décrivent de façon précise et détaillée les éléments naturels du terrain, tel le relief, l’hydrographie en utilisant une symbologie conventionnelles : courbes de niveau, relief ombré, traits bleus pour représenter les cours d’eau. Dans ce type de carte, une attention particulière est accordée au positionnement précis des objets représentés.\n" +
              "\n" +
              "Les cartes chorographiques, qui ont l’ambition de décrire l’ensemble des, et tout au moins d’en souligner les points remarquables, Elles représentent à la fois les éléments anthropique (les villes, les routes, les frontières, les services publics) et les éléments naturels. Elles ont souvent recours à des icônes (pictogrammes, idéogrammes) en guise de symboles ponctuels, ou quelquefois à des numéros qui renvoient à un index. Les cartes politiques et touristiques sont de cet ordre.\n" +
              "\n" +
              "Les cartes thématiques qui représentent généralement un phénomène unique. Contrairement aux précédentes, elles sont analytiques et explicatives. On a recours par exemple des symboles ponctuels ou linéaires gradués en taille, des polygones hachurés de différents espacements, ou par exemple à des gradations de couleur pour représenter l’intensité d’un phénomène quantitatif (carte dite choroplèthe).\n" +
              "\n" +
              "On découpe habituellement les séries quantitatives en classes. Il existe diverses méthodes de discrétisation des classes (classes égales, progression géométrique, seuils naturels), ces méthodes renvoient à la cartographie statistique. L’ensemble de ces procédés renvoie à l’idée de sémiologie graphique.",
            comments: [],
            editSuggestionsComments: [],
            writingSettings: {},
            createdAt: "2022-02-19T20:25:59.949Z",
            updatedAt: "2022-02-19T20:25:59.949Z",
          },
        ],
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
