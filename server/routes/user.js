const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.delete("/logout", userController.logOut);
router.get("/:id", userController.getOneUser);
router.get("/:id/essays", userController.getUserEssays);
router.get("/:id/fav-authors-essays", userController.getFavAuthorsEssays);
router.get("/:id/liked-essays", userController.getLikedEssays);
router.post("/:id/writing-settings", userController.updateWritingSettings);
router.post("/:id/draft", userController.postDraft);

module.exports = router;
