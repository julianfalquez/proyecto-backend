const express = require("express");
const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/", cartController.fetchCart);
router.post("/", cartController.addToCart);
router.post("/buy", cartController.buyCart);

module.exports = router;
