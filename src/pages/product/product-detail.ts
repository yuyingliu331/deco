import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';

@Component({
  templateUrl: 'product-detail.html',
  styleUrls: ['/pages/product/product-detail.scss'],
  providers: [CatalogService],
})
export class ProductDetailPage {
  product = [];
  public productId:any;

  constructor(public navCtrl: NavController, private catalogService: CatalogService, params: NavParams) {
    this.productId = params.get('productId');
  }

  getProductById = function() {
    this.catalogService.getProductById(this.productId)
    .then(result => {
      this.product = result;
    })
  }

  ngOnInit() {
    this.getProductById();
  }
}
