const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// need routes for user signup, login, and logout
router.post("/signup", authController.createUser);
// credentials get passed to the server and we verify the credentials to log the user in
// router.post("/login", auth.handlerGoesHere);
// clear user session/token etc...
// router.post("/logout", auth.handlerGoesHere);

module.exports = router;
