const express = require("express");
const essayController = require("../controllers/essay");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(essayController.getAllEssays)
  .post(essayController.createEssay);
router
  .route("/:id")
  .get(essayController.getOneEssay)
  .patch(essayController.updateEssay)
  .delete(essayController.deleteEssay);

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
