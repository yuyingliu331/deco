'use strict';

const router = require('express').Router();

router.use('/google', require('./google'));
router.use('/facebook', require('./facebook'));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
