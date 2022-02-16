const express = require("express");
const currentSessionController = require("../controllers/currentSession");

const router = express.Router();

router.route("/").get(currentSessionController.getCurrentSession);
//router.route("/:id").get(languageController.getOneLanguage);

module.exports = router;
