const express = require('express');
const router = express.Router();
const models = require('../../models');
const User = models.User;

router.get('/', function(req, res, next) {
  User.findAll({attributes: ['id', 'email']})
  .then(function(users) {
    res.send(users);
  })
  .catch(next);
});

router.post('/', function(req, res, next) {
  User.findOrCreate({where: req.body, attributes: ['id', 'email']})
  .spread(function(user, created) {
    res.send(user);
  })
  .catch(next);
});

router.put('/:userId', function(req, res, next) {
  User.findById(req.params.userId, { attributes: ['id', 'email']})
  .then(function(user){
    return user.update(req.body);
  })
  .then(function(user) {
    res.send(user);
  })
  .catch(next);
});

router.get('/:userId', function(req, res, next) {
  User.findById(req.params.userId, {attributes: ['id', 'email']})
  .then(function(user) {
    res.send(user);
  })
  .catch(next);
});

router.delete('/:userId', function(req, res, next) {
  User.destroy({where: {id: req.params.userId } })
  .then(function() {
    res.status(204).send();
  })
  .catch(next);
});

module.exports = router;
