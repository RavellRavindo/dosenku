const jwt  = require('jsonwebtoken');
const User = require('../models/user');

require('dotenv').config();

module.exports.verifyUser = (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.json({ status: false })
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (!err) {
      const user = await User.findById(data.id)

      if (user) {
        return res.json({ status: true, user: user.username })
      }
    }

    return res.json({ status: false })
  });
}
