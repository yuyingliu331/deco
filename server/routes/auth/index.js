'use strict';

const router = require('express').Router();
const path = require('path');

router.get('/session', function(req, res, next) {
  console.log('session request ', req.session);
  res.send(req.session);
});

router.use('/google', require('./google'));
router.use('/facebook', require('./facebook'));
router.get('/logout', function(req, res){
  req.session.destroy();
  req.logout();
    res.sendFile(path.join(__dirname, '../../../www/assets/logout.html'));
});

module.exports = router;
