const express = require("express");
const levelController = require("../controllers/level");

const router = express.Router();

router.route("/").get(levelController.getLevels);
router.route("/:id").get(levelController.getOneLevel);

module.exports = router;
