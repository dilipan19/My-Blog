const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    //console.log('Token verified:', verified);
    
    next();
  } catch (err) {
    console.log('Invalid Token:', err);
    res.status(400).json("invalid token");
  }
}

module.exports = verifyToken;
