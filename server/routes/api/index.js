'use strict';

const router = require('express').Router();

// require individual routes here
// ex: router.use('/products', require('products'))
router.use('/products', require('./products'));
router.use('/users', require('./users'));
router.use('/wishlists', require('./wishlists'));
router.use('/likes', require('./likes'));


module.exports = router;
