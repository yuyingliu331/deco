import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';
import { CatalogService } from '../providers/catalog-service';
import { HttpModule }    from '@angular/http';
import { ProductDetailPage } from '../pages/product/product-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatalogPage,
    ProductDetailPage
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
    ProductDetailPage
  ],
  providers: [CatalogService]
})
export class AppModule {
}
