const passport = require("passport");
const passportStrategy = require("passport-local").Strategy;
const userController = require("../controllers/user");
const userModel = require("../models/userModel");

passport.use('login', new passportStrategy(async (username, password, done) => {
  console.log(username);
  let user = await userController.exist(username);

  if (!user) return done(null, false);
  if (!userModel.comparePassword(password, user[0].password)) return done(null, false);
  
  return done(null, user[0]);
}));

passport.use('register', new passportStrategy({
  passReqToCallback: true
}, async (req, username, password, done) => {
  console.log('Llego strategy')
  let exist = await userController.exist(username);

  if (exist) return done("Usuario existente");
  let user = await userController.create(req.body);
  
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, done);
});

module.exports = passport;
