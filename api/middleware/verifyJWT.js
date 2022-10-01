const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {                
        res.status(404).json({
          message: err,
          err,
        });
        return;
      } 
      res.locals.jwt = decoded;
      next();      
    });
  } else {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
};

module.exports = verifyJWT;