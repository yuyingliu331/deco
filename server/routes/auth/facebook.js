'use strict';

const router = require('express').Router();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../../models/').User;
const envVar = require('../../env').FACEBOOK;

const facebookCredentials = {
  clientID: envVar.clientID,
  clientSecret: envVar.clientSecret,
  callbackURL: envVar.callbackURL,
  profileFields: ['id', 'emails']
};

router.get('/', passport.authenticate('facebook'));

router.get('/callback',
  passport.authenticate('facebook', {successRedirect: '/', failureRedirect: '/login'}),
  function (req, res) {
    res.redirect('/');
});

passport.use( new FacebookStrategy(facebookCredentials,
  // Facebook will send back the token and profile
  function (token, refreshToken, profile, done) {
    var info = {
      email: profile.emails[0].value,
    };

    User.findOrCreate({
      where: {facebookId: profile.id},
      defaults: info
    })
    .spread(function (user) {
      done(null, user);
    })
    .catch(done);
}));

module.exports = router;
