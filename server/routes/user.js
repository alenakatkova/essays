const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

// router.route("/").get(userController.getUsers);
router.get("/", userController.getUsers);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.delete("/logout", userController.logOut);
router.get("/:id", userController.getOneUser);

module.exports = router;
