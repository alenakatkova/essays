const express = require("express");
const essayController = require("../controllers/essay");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(requireAuth, essayController.getEssays)
  .post(essayController.createEssay);
router
  .route("/:id")
  .get(essayController.getOneEssay)
  .patch(essayController.updateEssay)
  .delete(essayController.deleteEssay);

module.exports = router;
