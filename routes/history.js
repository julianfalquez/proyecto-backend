const express = require("express");
const historyController = require("../controllers/history");

const router = express.Router();

router.get("/:id", historyController.fetchHistory);

module.exports = router;
