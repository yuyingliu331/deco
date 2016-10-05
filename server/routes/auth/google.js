'use strict';

const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../../models/').User;
const envVar = require('../../env').GOOGLE;

const googleCredentials = {
  clientID: envVar.clientID,
  clientSecret: envVar.clientSecret,
  callbackURL: envVar.callbackURL
};

router.get('/', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));

router.get('/callback',
  passport.authenticate('google', {failureRedirect: '/login'}),
  function (req, res) {
    res.redirect('/');
});



passport.use( new GoogleStrategy(googleCredentials,
  // Google will send back the token and profile
  function (token, refreshToken, profile, done) {
    var info = {
      email: profile.emails[0].value,
    };

    User.findOrCreate({
      where: {googleId: profile.id},
      defaults: info
    })
    .spread(function (user) {
      done(null, user);
    })
    .catch(done);
}));

module.exports = router;
