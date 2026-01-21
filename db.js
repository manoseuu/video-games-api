const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri =
      'mongodb+srv://admin:manos1234@cluster0.yarixuy.mongodb.net/videoGamesDB?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(uri, {
      tls: true,
      tlsInsecure: true
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
