const express = require("express");
const userController = require("../controllers/users");

const router = express.Router();

router.get("/", userController.fetchUser);
router.post("/login", userController.login);
router.post("/register", userController.signup);
router.post("/prev-login", userController.fetchPrevLogin);

module.exports = router;
