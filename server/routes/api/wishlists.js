const express = require('express');
const router = express.Router();
const models = require('../../models');
const Wishlist = models.Wishlist;

// get all the wishlist: 
router.get('/', function(req, res, next) {
  Wishlist.findAll({attributes: ['id', 'name', 'userId']})
  .then(function(wishlists) {
    res.send(wishlists);
  })
  .catch(next);
});

//create a new wishlist: 
router.post('/', function(req, res, next) {
  Wishlist.create(req.body)
  .then(function(wishlist) {
    res.status(201).send(wishlist);
  })
  .catch(next);
});

//update the wishlist: 
router.put('/:id', function(req, res, next) {
  Wishlist.findById(req.params.id, { attributes: ['id', 'email', 'userId']})
  .then(function(wishlist){
    return wishlist.update(req.body);
  })
  .then(function(wishlist) {
    res.send(wishlist);
  })
  .catch(next);
});

//get single wishlist by wishlist id: 
router.get('/:id', function(req, res, next){
  Wishlist.findById(req.params.id)
  .then(function(wishlist){
    res.send(wishlist);
  })
  .catch(next);
})

//find all wishlist by userId
router.get('/:userId', function(req, res, next) {
  Wishlist.findAll( { where: { userId: req.params.userId} })
  .then(function(wishlists) {
    res.send(wishlists);
  })
  .catch(next);
});

//delete a wishlist by id: 
router.delete('/:id', function(req, res, next) {
  Wishlist.destroy({ where: {id: req.params.id } })
  .then(function() {
    res.status(204).send();
  })
  .catch(next);
});

module.exports = router;
