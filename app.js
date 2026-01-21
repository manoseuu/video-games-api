const express = require('express');
const app = express();
const connectDB = require('./config/db');

const gamesRoutes = require('./routes/games.routes');
const usersRoutes = require('./routes/users.routes');

app.use(express.json());


app.use('/api/games', gamesRoutes);
app.use('/api/users', usersRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
