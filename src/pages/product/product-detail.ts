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
  showDescription = false;
  showSize = false;
  showMaterial = false;
  public productId:any;

  constructor(public navCtrl: NavController, private catalogService: CatalogService, params: NavParams) {
    this.productId = params.get('productId');
  }

  getProductById = function() {
    this.catalogService.getProductById(this.productId)
    .then(result => {
      this.product = result;
      console.log('size', typeof this.product.size);
      console.log(this.product.size[0]);
    })
  }

  ngOnInit() {
    this.getProductById();
  }

  showIcon(category) {
    if (category) {
      return 'ios-remove-circle-outline';
    } else {
      return 'ios-add-circle-outline';
    }
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  toggleSize() {
    this.showSize = !this.showSize;
  }

  toggleMaterial() {
    this.showMaterial = !this.showMaterial;
  }

}
