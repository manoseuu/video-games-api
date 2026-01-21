const Game = require('../models/Game.model');


exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching games', error: error.message });
  }
};


exports.createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: 'Error creating game', error: error.message });
  }
};


exports.getTopGames = async (req, res) => {
  try {
    const topGames = await Game.find()
      .sort({ rating: -1 })
      .limit(5);
    res.status(200).json(topGames);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching top games', error: error.message });
  }
};


exports.getGamesByGenre = async (req, res) => {
  try {
    const genreName = req.params.genreName;
    const gamesByGenre = await Game.find({ genreTags: genreName });
    res.status(200).json(gamesByGenre);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching games by genre', error: error.message });
  }
};
