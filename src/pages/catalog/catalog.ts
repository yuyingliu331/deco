import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { ProductsPage } from '../products/products';

@Component({
  templateUrl: 'catalog.html',
  styleUrls: ['/pages/catalog/catalog.scss'],
  providers: [CatalogService],
})
export class CatalogPage {
  productsByCategory = [];

  constructor(public navCtrl: NavController, private catalogService: CatalogService) {
  }

  getProductsByCategory = function() {
    this.catalogService.getProductsByCategory()
    .then(result => {
      this.productsByCategory = result;
    })
  }

  goToCategoryPage = function(products) {
    console.log(products, 'catalog page');
    this.navCtrl.push(ProductsPage, {products});
  }
  //you have a 2-d array of categories,
  ngOnInit() {
    this.getProductsByCategory();
  }
}
