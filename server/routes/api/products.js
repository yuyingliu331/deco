var express = require('express');
var router = express.Router();
var models = require('../../models');

router.get('/', function(req, res, next) {
  models.Product.findAll()
  .then(function(products) {
    res.send(products);
  })
  .catch(next);
});

module.exports = router;
