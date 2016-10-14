'use strict';

const router = require('express').Router();

router.get('/session', function(req, res, next) {
  console.log('session request ', req.session);
  res.send(req.session);
});

router.use('/google', require('./google'));
router.use('/facebook', require('./facebook'));
router.get('/logout', function(req, res){
  req.session.destroy();
  req.logout();
  res.send('logged out');
});

module.exports = router;
