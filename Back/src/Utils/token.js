const JWT = require("jsonwebtoken");

const getToken = (user) => {
  return JWT.sign(
    {
      _id: user._id,
      username: user.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );
};

const isAuth = (req, res, next) => {
  const header = req.headers.authorization;

  if (header) {
    const token = header.slice(7, header.length);
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({message: 'Token invalido'})
      }
      return next();
    });
  } else {
    res.status(401).send({message: 'Token no provisto'})
  }
};

module.exports = { getToken, isAuth };
