'use strict';

const router = require('express').Router();

router.get('/session', function(req, res, next) {
  res.send(req.session);
});

router.use('/google', require('./google'));
router.use('/facebook', require('./facebook'));

module.exports = router;
