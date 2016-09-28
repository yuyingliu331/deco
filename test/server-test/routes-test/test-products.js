var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Products', function() {
  it('should list ALL products on /products GET', function(done) {
  chai.request(server)
    .get('/api/products')
    .end(function(err, res){
      if (err) console.log(err);
      res.should.have.status(200);
      done();
    });
});
  it('should list a SINGLE product on /product/<id> GET');
  it('should add a SINGLE product on /products POST');
  it('should update a SINGLE product on /product/<id> PUT');
  it('should delete a SINGLE product on /product/<id> DELETE');
});
