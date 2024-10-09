const Webtoon = require("../models/Webtoon");

// GET /webtoons - Fetch all webtoons
const getAllWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.status(200).json(webtoons);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// POST /webtoons - Add a new webtoon
const createWebtoon = async (req, res) => {
  const { title, description, characters } = req.body;

  if (!title || !description || !characters) {
    return res.status(400).json({ message: "Please include all fields" });
  }

  try {
    const newWebtoon = new Webtoon({ title, description, characters });
    await newWebtoon.save();
    res.status(201).json(newWebtoon);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET /webtoons/:id - Fetch specific webtoon by ID
const getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ message: "Webtoon not found" });
    }
    res.status(200).json(webtoon);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /webtoons/:id - Delete a webtoon
const deleteWebtoon = async (req, res) => {
  try {
    const webtoon = await Webtoon.findByIdAndDelete(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ message: "Webtoon not found" });
    }
    res.status(200).json({ message: "Webtoon deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  deleteWebtoon,
  getWebtoonById,
  getAllWebtoons,
  createWebtoon,
};