const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const session = require('express-session');
const passport = require('passport');
const User = require('./models').User;
const sessionSecret = require('../secrets.json').sessionSecret;

app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);
app.use(cors()); // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(express.static('www')); // Our Ionic app build is in the www folder (kept up-to-date by the Ionic CLI using 'ionic serve')

//Express Session
app.use(session({secret: sessionSecret}));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
  .then(function (user) {
    done(null, user);
  })
  .catch(done);
});

//Passport Init
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));

// Initialize the app.
app.listen(app.get('port'), function () {
console.log("You're a wizard, Harry. I'm a what? Yes, a wizard, on port", app.get('port'));
});

module.exports = app;
