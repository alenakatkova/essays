const express = require("express");
const postController = require("../controllers/post");
const requireAuth = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);
router
  .route("/:id")
  .get(postController.getOnePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

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
