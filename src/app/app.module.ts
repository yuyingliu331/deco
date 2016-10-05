import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';
import { ProductsPage } from '../pages/products/products';
import { CatalogService } from '../providers/catalog-service';
import { WishlistService } from '../providers/wishlist-service';
import { SessionService } from '../providers/session-service';
import { HttpModule }    from '@angular/http';
import { ProductDetailPage } from '../pages/product/product-detail';
import { ArgonPage } from '../pages/argon/argon';
import { ListItem } from '../pages/list-item/list-item';
import { WishlistsPage } from '../pages/wishlists/wishlists';
import { WishlistPage } from '../pages/wishlist/wishlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CatalogPage,
    ProductDetailPage,
    ProductsPage,
    ArgonPage,
    ListItem,
    WishlistsPage,
    WishlistPage
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
    ArgonPage,
    ListItem,
    WishlistsPage,
    WishlistPage
  ],
  providers: [CatalogService, WishlistService, SessionService]
})
export class AppModule {
}
