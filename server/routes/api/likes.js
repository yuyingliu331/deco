'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const Likes = models.Likes;

router.get('/', function(req, res, next) {
  Likes.findAll()
  .then(function(likes) {
    res.status(200).send(likes);
  })
  .catch(next);
});

//gets likes for user
//takes userId
router.get('/:userId', function(req, res, next) {
  Likes.findAll({ where: {userId: req.params.userId} })
  .then(function(likes) {
    res.status(200).send(likes);
  })
  .catch(next);
});

router.get('/:userId/:productId', function(req, res, next) {
  Likes.findOne({ where: {userId: req.params.userId, productId: req.params.productId} })
  .then(function(like) {
    res.status(200).send(like);
  })
  .catch(next);
});

//adds a like to db
//takes userId, productId ->pass in req.body
router.post('/', function(req, res, next) {
  Likes.create(req.body)
  .then(function(like) {
    res.status(200).send(like);
  })
  .catch(next);
});

//deletes a like
//takes userId, productId
router.delete('/:userId/:productId', function(req, res, next) {
  Likes.findOne({ where: {userId: req.params.userId, productId: req.params.productId} })
  .then(function(like) {
    return like.destroy();
  })
  .then(function(){
    res.status(204).send();
  })
  .catch(next);
});

module.exports = router;
