import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject }    from 'rxjs/Subject';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionService {

  session = null;
  private newSessionInfo = new Subject<any>();
  sessionInfo$;

  constructor(public http: Http) {
    this.http = http;
    this.sessionInfo$ = this.newSessionInfo.asObservable();
  }

  announceNewSession() {
    this.newSessionInfo.next(this.session);
  }

  getSessionInfo() : any {
    return this.http.get('http://gh-deco.herokuapp.com/auth/session')
      .toPromise()
      .then((response : any) => {
        console.log("in session factory")
        this.session = JSON.parse(response._body);
        this.announceNewSession();
        return this.session;
      })
      .catch(err => console.log(err));
  }

  getSession() : any {
    if (!this.session) {
      return this.getSessionInfo()
      .then((info) => {
        return this.session;
      });
    } else {
      return this.session;
    }
  }

  logoutSession() : any {
    return this.http.get('http://gh-deco.herokuapp.com/auth/logout')
      .toPromise()
      .then((response : any) => {
        this.session = null;
      })
  }

}
