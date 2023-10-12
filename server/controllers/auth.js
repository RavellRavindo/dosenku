const bcrypt = require('bcrypt');
const User   = require('../models/user');
const Token  = require('../utils/token');

module.exports.Register = async (req, res, next) => {
  try {
    const { fullname, email, phoneNumber, school, password } = req.body;

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res.json({ message: 'Email already in use' });
    }

    const userPhone = await User.findOne({ phoneNumber });
    if (userPhone) {
      return res.json({ message: 'Phone number already in use' });
    }

    const user = await User.create({ fullname, email, phoneNumber, school, password });
    const token = Token.createSecretToken(user._id);

    res.status(201)
      .json({
        message: 'Register successful',
        success: true,
        user
      })
      .cookie('token', token, {
        withCredentials: true,
        httpOnly: false,
      });

    next();
  }
  catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect email or password' });
    }

    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect email or password' });
    }

    const token = Token.createSecretToken(user._id);
    res.status(201)
      .json({
        message: 'Login successful',
        success: true
      })
      .cookie('token', token, {
        withCredentials: true,
        httpOnly: false,
      });

     next()
  }
  catch (error) {
    console.error(error);
  }
};
