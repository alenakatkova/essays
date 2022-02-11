const express = require("express");
const essayController = require("../controllers/essay");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(requireAuth, essayController.getAllEssays)
  .post(essayController.createEssay);
router
  .route("/:id")
  .get(requireAuth, essayController.getOneEssay)
  .patch(requireAuth, essayController.updateEssay)
  .delete(requireAuth, essayController.deleteEssay);

// router
//   .route("/")
//   .get(requireAuth, postController.getAllPosts)
//   .post(requireAuth, postController.createPost);
// router
//   .route("/:id")
//   .get(requireAuth, postController.getOnePost)
//   .patch(requireAuth, postController.updatePost)
//   .delete(requireAuth, postController.deletePost);

module.exports = router;
