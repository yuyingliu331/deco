var express = require('express');
var router = express.Router();

// require individual routes here
// ex: router.use('/products', require('products'))

router.use('/products', require('./products'));
router.use('/users', require('./users'));

module.exports = router;
