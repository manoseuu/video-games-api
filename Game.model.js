const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    releaseYear: { type: Number },
    rating: { type: Number, min: 0, max: 10 },
    online: { type: Boolean },
    company: { type: String },
    type: { type: String },
    completionTime: { type: Number },
    description: { type: String },
    price: { type: Number },
    consoles: { type: [String] },       
    difficulty: { type: String },
    images: { type: [String] },
    genreTags: { type: [String] },      
    multiplayerModes: { type: [String] },
    languages: { type: [String] },
    metacriticURL: { type: String },
    awards: { type: [String] },
    availableOnStore: { type: Boolean },
    ageRating: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Game', gameSchema);
