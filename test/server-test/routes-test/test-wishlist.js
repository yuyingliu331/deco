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
const Wishlist = db.Wishlist;
const User = db.User;

chai.use(chaiHttp);

describe('api/wishlists', function() {
  var wishlist1, wishlist2;
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



  const wishlistInfo1 = {
    name: "happyChristmas",
    userId: 1
  
  };
  const wishlistInfo2 = {
    name: "birthdayGiftIdea",
      userId:  2
  };

  beforeEach(function(){
  return User.bulkCreate([userInfo1, userInfo2])
  .then(function(newUsers) {
    user1 = newUsers[0];
    user2 = newUsers[1];
  }).then(function(){
    return Wishlist.create(wishlistInfo1)
  }).then(function(wishlist){
    wishlist1 = wishlist;
  });
});

  afterEach(function() {
    Wishlist.destroy({
      where: {
        id: {
          $gt: 0
        }
      }
    });
  });
  //delete users: 
   afterEach(function() {
    User.destroy({
      where: {
        id: {
          $gt: 0
        }
      }
    });
  });

  it('should list ALL wishlists on /wishlists GET', function(done) {
    chai.request(server)
      .get('/api/wishlists/')
      .end(function(err, res) {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(1);
        done();
      });
  });

  it('should list a SINGLE wishlist on /wishlist/<id> GET', function(done) {
    chai.request(server)
    .get('/api/wishlists/'+ wishlist1.id)
    .end(function(err, res) {
      console.log("err message", err);
      if (err) return done(err);
      expect(res.body).to.be.an('object');
      expect(res.body.name).to.equal(wishlist1.name);
      done();
    });
  });

  it('should add a SINGLE wishlist on /wishlists POST', function(done) {
    chai.request(server)
    .post('/api/wishlists')
    .send({ name: "ThisIsMyDreamList", userId: 1 })
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body.name).to.equal('ThisIsMyDreamList');
      expect(res.body.userId).to.equal(1);
      done();
    });
  });

  it('should update a SINGLE wishlist on /wishlist/<id> PUT', function(done) {
    chai.request(server)
    .put('/api/wishlists/'+ wishlist1.id)
    .send({ name: 'thisIsASweetGift' })
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body.name).to.be.equal("thisIsASweetGift");
      done();
    });
  });

  it('should delete a SINGLE user on /wishlist/<id> DELETE', function(done) {
    chai.request(server)
    .delete('/api/wishlists/'+wishlist1.id)
    .end(function(err, res) {
      if (err) return done(err);
      expect(res).to.have.status(204);
      Wishlist.findAll()
      .then(function(wishlist) {
        expect(wishlist).to.have.length(0);
      });
      done();
    });
  });
});
