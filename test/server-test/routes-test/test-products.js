
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
    description: 'A very comfy seat.',
    size: [1, 2, 3],
    material: 'Leather',
    photo: 'http://placehold.it/350x150',
    product3dModel: 'http://models.com/model.wt3',
    modelPath: 'b6fe53f044774f09b345d05effedd63f',
    scale: '1000'
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

  it('should return 404 when a SINGLE product doesnt exist', function(done) {
    chai.request(server)
      .get('/api/products/' + 238428394)
      .end(function(err, res) {
        if (err) {
          expect(res).to.have.status(404);
        }
        done();
      });
  });

  it('should add a SINGLE product on /products POST', function(done) {
    chai.request(server)
      .post('/api/products/')
      .send({
        category: 'Chair',
        description: 'A very comfy chair.',
        size: [1, 1, 1],
        material: 'Cloth',
        photo: 'http://placehold.it/350x150',
        product3dModel: 'http://models.com/chair.wt3',
        modelPath: 'b6fe53f044774f09b345d05effedd63f',
        scale: '0500'
      })
      .end(function(err, res){
        if (err) return done(err);
        expect(res).to.have.status(201);
        expect(res.body.category).to.equal('Chair');
        done();
      });
  });

  it('should update a SINGLE product on /product/<id> PUT', function(done) {
    chai.request(server)
      .put('/api/products/' + product1.id)
      .send({
        material: 'Leather'
      })
      .end(function(err, res) {
        if (err) return done(err);
        expect(res).to.have.status(201);
        expect(res.body.material).to.equal('Leather');
        done();
      });
  });

  it('should return 404 when trying to update a SINGLE product that doesnt exist', function(done) {
    chai.request(server)
      .put('/api/products/' + 234892342)
      .send({
        material: 'Leather'
      })
      .end(function(err, res) {
        if (err) {
          expect(res).to.have.status(404);
        }
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
