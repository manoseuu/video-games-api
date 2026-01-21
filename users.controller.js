const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

// Δημιουργία χρήστη
exports.registerUser = async (req,res) => {
  try {
    const { username,email,password } = req.body;
    const user = await User.create({username,email,password});
    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch(error){
    res.status(400).json({ message: 'Error registering user', error: error.message });
  }
};

// Login
exports.loginUser = async (req,res) => {
  try{
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if(!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch(error){
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};


exports.getProfile = async (req,res) => {
  try{
    const user = await User.findById(req.user.userId).select('-password');
    res.status(200).json(user);
  } catch(error){
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};
