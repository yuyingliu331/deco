import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { CatalogService } from './catalog-service';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WishlistService {

  constructor(public http: Http, private catalogService: CatalogService) {
    this.http = http;
  }

  getUserWishlists() : any {
    return this.http.get('/api/wishlists/')
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  //get all products from wishlistservice with wishlist id
  getWishlist(wishlistId) : any {
    return this.http.get('/api/wishlists/' + wishlistId)
      .toPromise()
      .then(response => {
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
    return this.http.post('/api/wishlists/', {userId, name})
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

  addProductToWishlist(wishlistId, productId) {
    return this.http.put('/api/wishlists/', {wishlistId, productId})
      .toPromise()
      .then(response => {
        return JSON.parse(response._body);
      })
      .catch(err => console.log(err));
  }

}
