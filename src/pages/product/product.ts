import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';

@Component({
  templateUrl: 'product.html',
  styleUrls: ['/pages/product/product.scss'],
  providers: [CatalogService],
})
export class ProductPage {
  product = [];

  constructor(public navCtrl: NavController, private catalogService: CatalogService) {
  }

  getProductById = function() {
    this.catalogService.getProductById(1)
    .then(result => {
      this.product = result;
    })
  }

  ngOnInit() {
    this.getProductById();
  }
}
