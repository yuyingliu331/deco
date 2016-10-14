'use strict';

//This line has tests be performed on deco_testing database
//see server config.json file to see testing database setup
process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const expect = require('chai').expect;
const db = require('../../../server/models');
const Wishlist = db.Wishlist;
const User = db.User;

chai.use(chaiHttp);

describe('api/wishlists', function() {
  var wishlist1;
  var user1;

  const userInfo1 = {
    id: 1,
    email: 'Johanna@altmann.com',
    googleId: 123
  };

  const wishlistInfo1 = {
    id: 1,
    name: 'happyChristmas',
    userId: 1
  };

  beforeEach(function(){
    return User.create(userInfo1)
    .then(function(newUsers) {
      user1 = newUsers[0];
    })
    .then(function(){
      return Wishlist.create(wishlistInfo1);
    })
    .then(function(wishlist){
      wishlist1 = wishlist;
    });
  });

  afterEach(function() {
    return Wishlist.destroy({
      where: {
        id: {
          $gt: 0
        }
      }
    })
    .then(function() {
      return User.destroy({
        where: {
          id: {
            $gt: 0
          }
        }
      });
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

  it('should add a SINGLE wishlist on /wishlists POST', function(done) {
    chai.request(server)
    .post('/api/wishlists')
    .send({ name: 'ThisIsMyDreamList', userId: 1 })
    .end(function(err, res) {
      if (err) return done(err);
      expect(res.body.name).to.equal('ThisIsMyDreamList');
      expect(res.body.userId).to.equal(1);
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
