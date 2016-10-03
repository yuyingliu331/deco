import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';
import { ProductsPage } from '../pages/products/products';
import { CatalogService } from '../providers/catalog-service';
import { HttpModule }    from '@angular/http';
import { ProductDetailPage } from '../pages/product/product-detail';
import { ARView } from '../pages/ar-view/ar-view';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatalogPage,
    ProductDetailPage,
    ProductsPage,
    ARView
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatalogPage,
    ProductDetailPage,
    ProductsPage,
    ARView
  ],
  providers: [CatalogService]
})
export class AppModule {
}
