'use strict';

//This line has tests be performed on deco_testing database
//see server config.json file to see testing database setup
process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const should = chai.should();
const expect = require('chai').expect;
const Sequelize = require('sequelize');
const db = require('../../../server/models');
const User = db.User;

chai.use(chaiHttp);

describe('api/users', function() {
  var user1, user2;

  const userInfo1 = {
    id: 1,
    email: "Johanna@altmann.com",
    googleId: 123
  };

  const userInfo2 = {
    id : 2,
    email: "Chloe@Chloe.com",
    facebookId: 234
  };

  beforeEach(function(){
    return User.bulkCreate([userInfo1, userInfo2])
    .then(function(newUsers) {
      user1 = newUsers[0];
      user2 = newUsers[1];
    });
  });

  afterEach(function() {
    User.destroy({
      where: {
        id: {
          $gt: 0
        }
      }
    });
  });

  it('should list ALL users on /users GET', function(done) {
    chai.request(server)
      .get('/api/users')
      .end(function(err, res) {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(2);
        done();
      });
  });

  it('should list a SINGLE user on /user/<id> GET', function(done) {
    chai.request(server)
    .get('/api/users/1')
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body).to.be.an('object');
      expect(res.body.email).to.equal(user1.email);
      done();
    });
  });

  it('should add a SINGLE user on /users POST', function(done) {
    chai.request(server)
    .post('/api/users')
    .send({ email: "Josie@Josie.com" })
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body.email).to.equal('Josie@Josie.com');
      expect(res.body.isAdmin).to.equal(false);
      done();
    });
  });

  it('should update a SINGLE user on /user/<id> PUT', function(done) {
    chai.request(server)
    .put('/api/users/1')
    .send({ isAdmin: true })
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body.isAdmin).to.be.equal(true);
      done();
    });
  });

  it('should delete a SINGLE user on /user/<id> DELETE', function(done) {
    chai.request(server)
    .delete('/api/users/2')
    .end(function(err, res) {
      if (err) return done(err);
      expect(res).to.have.status(204);
      User.findAll()
      .then(function(users) {
        expect(users).to.have.length(1);
      });
      done();
    });
  });
});
