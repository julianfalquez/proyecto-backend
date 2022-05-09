const express = require("express");
const reviewController = require("../controllers/reviews");

const router = express.Router();

router.get("/", reviewController.fetchReviews);
router.post("/", reviewController.postReview);

module.exports = router;
