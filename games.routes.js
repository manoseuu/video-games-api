const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games.controller');


router.get('/', gamesController.getAllGames);
router.post('/', gamesController.createGame);


router.get('/top', gamesController.getTopGames);
router.get('/genre/:genreName', gamesController.getGamesByGenre);

module.exports = router;
