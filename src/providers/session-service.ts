import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionService {

  constructor(public http: Http) {
    this.http = http;
  }

  getSessionInfo() : any {
    return this.http.get('/auth/session')
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

}
