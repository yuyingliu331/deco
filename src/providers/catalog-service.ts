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
      .then((response: any) => {
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

  getProductById(id) : any {
    return this.http.get('/api/products/' + id)
    .toPromise()
    .then((response: any) => {
      return JSON.parse(response._body);
    })
    .catch(err => console.log(err));
  }
}
