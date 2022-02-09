const express = require("express");
const testController = require("../controllers/test");

const router = express.Router();

router.route("/").get(testController.getTests);
router.route("/:id").get(testController.getOneTest);

module.exports = router;
