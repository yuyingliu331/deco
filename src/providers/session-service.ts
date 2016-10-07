import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionService {

  session = null;

  constructor(public http: Http) {
    this.http = http;
  }

  getSessionInfo() : any {
    if(!this.session) {
      //http://gh-deco.herokuapp.com
      return this.http.get('http://gh-deco.herokuapp.com/auth/session')
        .toPromise()
        .then((response : any) => {
          this.session = JSON.parse(response._body);
          return this.session;
        })
        .catch(err => console.log(err));
    } else {
      return this.session;
    }
  }

}
