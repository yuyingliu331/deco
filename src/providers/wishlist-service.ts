import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CatalogService } from './catalog-service';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WishlistService {

  private newWishlistCreated = new Subject<any>();
  wishlistCreated$;

  constructor(public http: Http, private catalogService: CatalogService) {
    this.http = http;
    this.wishlistCreated$ = this.newWishlistCreated.asObservable();
  }

  announceNewWishlist(wishlist: any) {
    this.newWishlistCreated.next(wishlist);
  }

  getUserWishlists(userId) : any {
    return this.http.get('http://gh-deco.herokuapp.com/api/wishlists/' + userId)
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  //get all products from wishlistservice with wishlist id
  getWishlist(userId, wishlistId) : any {
    return this.http.get('http://gh-deco.herokuapp.com/api/wishlists/' + userId + '/' + wishlistId)
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  //get all products from wishlist based on product id
  //due to lack of associations with wishlistproducts
  getWishlistProducts(wishlist) : any {
    let wishlistProducts = [];
    for(let item of wishlist) {
      this.catalogService.getProductById(item.productId)
      .then(function(product) {
        wishlistProducts.push(product);
      });
    }
    return wishlistProducts;
  }

  createWishlist(userId, name) : any {
    return this.http.post('http://gh-deco.herokuapp.com/api/wishlists/', {userId, name})
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  addProductToWishlist(wishlistId, productId) : any {
   return this.http.post('http://gh-deco.herokuapp.com/api/wishlists/add', {wishlistId, productId})
      .toPromise()
      .then((response : any) => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  deleteWishlist(wishlistId) {
    return this.http.delete('http://gh-deco.herokuapp.com/api/wishlists/' + wishlistId)
    .toPromise()
    .then((response : any) => {
      return JSON.parse(response._body);
    })
    .catch(err => console.log(err));
  }

  deleteWishlistProduct(wishlistId, productId) {
    return this.http.delete('http://gh-deco.herokuapp.com/api/wishlists/' + wishlistId + '/' + productId)
    .toPromise()
    .then((response : any) => {
      return JSON.parse(response._body);
    })
    .catch(err => console.log(err));
  }

}
