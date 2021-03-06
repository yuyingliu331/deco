const express = require('express');
const router = express.Router();
const models = require('../../models');
const Product = models.Product;

router.get('/', function(req, res, next) {
  console.log('session', req.session);

  Product.findAll()
  .then(function(products) {
    res.status(200).send(products);
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
    if (product) {
      res.send(product);
    } else {
      res.status(404).send('Product not found');
    }
  })
  .catch(next);
});

router.put('/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then(function(product) {
    if (product) {
      return product.update(req.body);
    } else {
      res.status(404).send('Product not found');
    }
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
