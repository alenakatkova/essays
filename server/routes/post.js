const express = require("express");
const postController = require("../controllers/post");
const protect = require("../middleware/auth");

const router = express.Router();

// router
//     .route("/")
//     .get(protect, postController.getAllPosts)
//     .post(protect, postController.createPost);
//
// router
//     .route("/:id")
//     .get(protect, postController.getOnePost)
//     .patch(protect, postController.updatePost)
//     .delete(protect, postController.deletePost);

router
    .route("/")
    .get(postController.getAllPosts)
    .post(postController.createPost);
router
    .route("/:id")
    .get(postController.getOnePost)
    .patch(postController.updatePost)
    .delete(postController.deletePost)

module.exports = router;