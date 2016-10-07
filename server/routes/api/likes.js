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

//gets like for user
//takes userId
router.get('/:userId', function(req, res, next) {
  Likes.findAll({ where: {userId: req.params.userId} })
  .then(function(likes) {
    res.status(200).send(likes);
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

//deletes a like from user
//takes userId, productId
router.delete('/', function(req, res, next) {
  Likes.destroy({ where: req.body })
  .then(function() {
    res.status(204).send();
  })
  .catch(next);
});

module.exports = router;
