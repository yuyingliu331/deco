const express = require('express');
const router = express.Router();
const models = require('../../models');
const Wishlist = models.Wishlist;
const WishlistProduct = models.WishlistProduct;

// get all the wishlist:
router.get('/', function(req, res, next) {
  var body = (req.session.passport) ? {where: { userId: req.session.passport.user}} : {};
  Wishlist.findAll(body)
  .then(function(wishlists) {
    res.status(200).send(wishlists);
  })
  .catch(next);
});

router.get('/:wishlistId', function(req, res, next) {
  WishlistProduct.findAll({where: {wishlistId: req.params.wishlistId }})
  .then(function(wishlist) {
    res.status(200).send(wishlist);
  })
  .catch(next);
});

//create a new wishlist
//will pass wishlist a name, userId
router.post('/', function(req, res, next) {
  Wishlist.create(req.body)
  .then(function(wishlist){
    res.status(201).send(wishlist);
  })
  .catch(next);
});

//create a wishlist:
//takes a productId, wishlistId --> adds new item to WishlistProduct
router.post('/add', function(req, res, next) {
  WishlistProduct.create(req.body)
  .then(function(wishlistItem) {
    res.status(201).send(wishlistItem);
  })
  .catch(next);
});

//delete just an item from a wishlist
router.delete('/product/:wishlistId/:productId', function(req, res, next) {
  WishlistProduct.destroy({where: { wishlistId: req.params.wishlistId, productId: req.params.productId } })
  .then(function() {
    res.status(204).send();
  })
  .catch(next);
});

//delete a wishlist by id, then delete all its products in WishlistProducts
router.delete('/:userId/:wishlistId', function(req, res, next) {
  WishlistProduct.destroy({where: { wishlistId: req.params.wishlistId } })
  .then(function(){
    return Wishlist.destroy({ where: {id: req.params.wishlistId } });
  })
  .then(function() {
    res.status(204).send();
  })
  .catch(next);
});

module.exports = router;
