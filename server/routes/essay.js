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

router.route("/:id/comment").post(requireAuth, essayController.postComment);

router
  .route("/:id/edit-suggestions-comment")
  .post(requireAuth, essayController.postEditSuggestionsComment);

router.route("/:id/rating").post(requireAuth, essayController.postRating);

router
  .route("/:id/edit-suggestions-comments")
  .get(requireAuth, essayController.getEditSuggestionsComments);

module.exports = router;
