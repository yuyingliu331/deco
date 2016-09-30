import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';

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

  ngOnInit() {
    this.getProductsByCategory();
  }
}
