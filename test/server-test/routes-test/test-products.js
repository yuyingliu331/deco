
process.env.NODE_ENV = 'testing';

const chai = require('chai');
const chaiHttp = require('chai-http');
const env = 'testing';
const server = require('../../../server');
const expect = require('chai').expect;
const Sequelize = require('sequelize');
const db = require('../../../server/models');
const Product = db.Product;

chai.use(chaiHttp);

describe('/api/products', function() {
  var product1;

  const productInfo = {
    category: 'Seat',
    room: 'Living',
    description: 'A very comfy seat.',
    size: [1, 2, 3],
    color: ['102830580'],
    material: 'Leather',
    price: '10',
    photo: 'http://www.google.com',
    product3dModel: 'http://www.google.com',
    style: 'Italian'
  };

  beforeEach('Create product', function() {
    return Product.create(productInfo)
    .then(function(product) {
      product1 = product;
    });
  });

  afterEach('Delete product created', function() {
    Product.destroy({
      where: {
        id: {
          $gt: 0
        }
      }
    });
  });

  it('should list ALL products on /products GET', function(done) {
    chai.request(server)
      .get('/api/products')
      .end(function(err, res){
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.instanceof(Array);
        expect(res.body).to.have.length(1);
        done();
      });
});
  it('should list a SINGLE product on /product/<id> GET', function(done) {
    chai.request(server)
      .get('/api/products/' + product1.id)
      .end(function(err, res){
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body.category).to.equal(product1.category);
        expect(res.body.price).to.equal(product1.price);
        done();
      });
  });

  it('should add a SINGLE product on /products POST', function(done) {
    chai.request(server)
      .post('/api/products/')
      .send({
        category: 'Sofa',
        room: 'Living',
        description: 'Very attractive seat.',
        size: [6, 6, 6],
        color: ['204820486'],
        material: 'Cloth',
        price: '845802',
        photo: 'http://www.amazon.com',
        product3dModel: 'http://www.amazon.com',
        style: 'Modern'
      })
      .end(function(err, res){
        if (err) return done(err);
        expect(res).to.have.status(201);
        expect(res.body.category).to.equal('Sofa');
        expect(res.body.price).to.equal(845802);
        done();
      });
  });
  it('should update a SINGLE product on /product/<id> PUT', function(done) {
    chai.request(server)
      .put('/api/products/' + product1.id)
      .send({
        room: 'Dining'
      })
      .end(function(err, res) {
        if (err) return done(err);
        expect(res).to.have.status(201);
        expect(res.body.room).to.equal('Dining');
        done();
      });
  });
  it('should delete a SINGLE product on /product/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/api/products/' + product1.id)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res).to.have.status(204);
        Product.findAll()
        .then(function(products) {
          expect(products).to.have.length(0);
        });
        done();
      });
  });
});
