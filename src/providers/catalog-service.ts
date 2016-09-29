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

  getAllProducts() {
    return this.http.get('/api/products')
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
