const express = require("express");
const router = express.Router();
const {
  getAllWebtoons,
  createWebtoon,
  getWebtoonById,
  deleteWebtoon,
} = require("../controllers/webtoonController");

// Webtoon routes
router.get("/", getAllWebtoons);
router.post("/", createWebtoon);
router.get("/:id", getWebtoonById);
router.delete("/:id", deleteWebtoon);

module.exports = router;
