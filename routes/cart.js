const express = require("express");
const postController = require("../controllers/posts");

const router = express.Router();

router.get("/", postController.fetchPosts);
router.post("/", postController.createPost);
router.get("/recent", postController.fetchRecentPosts);

module.exports = router;
