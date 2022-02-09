const express = require("express");
const languageController = require("../controllers/language");

const router = express.Router();

router.route("/").get(languageController.getLanguages);
router.route("/:id").get(languageController.getOneLanguage);

module.exports = router;
