const express = require('express');
const router = express.Router();
const models = require('../../models');
const Product = models.Product;

router.get('/', function(req, res, next) {
  Product.findAll()
  .then(function(products) {
    res.send(products);
  })
  .catch(next);
});

router.post('/', function(req, res, next) {
  Product.create(req.body)
  .then(function(product) {
    res.status(201).send(product);
  })
  .catch(next);
});

router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then(function(product) {
    res.send(product);
  })
  .catch(next);
});

router.put('/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then(function(product) {
    return product.update(req.body);
  })
  .then(function(updatedProduct) {
    res.status(201).send(updatedProduct);
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then(function(product) {
    return product.destroy();
  })
  .then(function() {
    res.sendStatus(204);
  })
  .catch(next);
});

module.exports = router;
