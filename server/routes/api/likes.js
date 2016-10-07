'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models');
const Likes = models.Like;

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
//takes userId, productId

//deletes a like from user
//takes userId, productId

module.exports = router;
