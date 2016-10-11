import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';

@Component({
  templateUrl: 'browse.html',
  styleUrls: ['/pages/browse/browse.scss'],
})
export class BrowsePage {
  products = [];
  categories = [];
  filtered = 'All';
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private catalogService:  CatalogService) {}

  getProducts : any = function() {
    this.catalogService.getAllProducts()
    .then((result: any) => {
      this.products = result;
      this.getAllCategories();
    })
  }

  getAllCategories : any = function() {
    let cats = [];
    this.products.forEach(function(product) {
      if (cats.indexOf(product.category) < 0) {
        cats.push(product.category);
      }
    })
    this.categories = cats;
  }

  ngOnInit() {
    this.getProducts();
  }
}
