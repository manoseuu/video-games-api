const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Game = require('../models/Game.model');

const connectDB = require('../config/db');

const populateGames = async () => {
  try {
    await connectDB();

    
    const filePath = path.join(__dirname, '..', 'video_games_dataset.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const games = JSON.parse(data);

    
    await Game.insertMany(games);

    console.log(`Successfully inserted ${games.length} games`);
    process.exit(0);
  } catch (error) {
    console.error('Error populating games:', error.message);
    process.exit(1);
  }
};

populateGames();
