const express = require("express");
const essayController = require("../controllers/essay");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(requireAuth, essayController.getEssays)
  .post(requireAuth, essayController.createEssay);
router
  .route("/:id")
  .get(requireAuth, essayController.getOneEssay)
  .patch(requireAuth, essayController.updateEssay)
  .delete(requireAuth, essayController.deleteEssay);

router
  .route("/:id/comments")
  .get(requireAuth, essayController.getEssayComments);

module.exports = router;
