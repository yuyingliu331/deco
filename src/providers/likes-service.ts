import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WishlistService } from './wishlist-service';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LikesService {

  constructor(public http: Http, private wishlistService: WishlistService) {
    this.http = http;
  }

  getUserLikes(userId) : any {
    return this.http.get('http://gh-deco.herokuapp.com/api/likes/' + userId)
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  likeItem(userId, productId) : any {
    return this.http.post('http://gh-deco.herokuapp.com/api/likes/', {userId, productId})
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  unlikeItem(userId, productId) : any {
    return this.http.delete('http://gh-deco.herokuapp.com/api/likes/', {userId, productId})
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  //wishlist service has a method that gets corresponding products
  //from a list of objects with product ids.
  getUserLikeProducts(list) : any {
    return this.wishlistService.getWishlistProducts(list)
  }
}
