import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CatalogService {

  constructor(public http: Http) {
    this.http = http;
  }

  getAllProducts() : any {
    return this.http.get('/api/products')
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  getProductsByCategory(): any {
    return this.getAllProducts()
    .then(function(products) {
      let categories = [];
      let productsByCategory = [];

      products.forEach(function(product) {
        if (categories.indexOf(product.category) < 0) {
          categories.push(product.category);
          productsByCategory[categories.indexOf(product.category)] = [];
        }
        productsByCategory[categories.indexOf(product.category)].push(product);
      })
      return productsByCategory;
    })
  }
<<<<<<< HEAD

  getProductById(id) : any {
    return this.http.get('/api/products/' + id)
    .toPromise()
    .then(response => {
      return JSON.parse(response._body);
    })
    .catch(err => console.log(err));
  }

=======
>>>>>>> 1a33f2e41c1338931d07e846d3395014403de6ab
}
