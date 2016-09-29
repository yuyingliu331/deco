import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';

@Component({
  templateUrl: 'catalog.html',
  providers: [CatalogService]
})
export class CatalogPage {
  item = 'im an item';
  products = [];

  constructor(public navCtrl: NavController, private catalogService: CatalogService) {
  }

  getAllProducts() {
    this.catalogService.getAllProducts()
    .then(products => this.products = products);
  }

  ngOnInit() {
    this.getAllProducts();
  }
}
