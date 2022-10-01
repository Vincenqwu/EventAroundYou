const jwt = require('jsonwebtoken');

const signJWT = (username) => {
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h', // will be expired after 1 hour
  });
  return token;
};

module.exports = signJWT;