'use strict';

const router = require('express').Router();

router.use('/google', require('./google'));
router.use('/facebook', require('./facebook'));

module.exports = router;
