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
    return this.http.get('http://gh-deco.herokuapp.com/auth/session')
      .toPromise()
      .then((response : any) => {
        this.session = JSON.parse(response._body);
         // return this.session;
         return {passport: {user: 1}}
      })
      .catch(err => console.log(err));
  }

  getSession() : any {
    // if (!this.session) {
    //   return this.getSessionInfo()
    //   .then((info) => {
    //     return this.session;
    //   });
    // } else {
    //   return this.session;
    // }
    return {passport: {user: 1}}
  }

  logoutSession() : any {
    return this.http.get('http://gh-deco.herokuapp.com/auth/logout')
      .toPromise()
      .then((response : any) => {
        this.session = null;
      })
  }

}
