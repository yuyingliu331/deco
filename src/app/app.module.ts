import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { CatalogService } from '../providers/catalog-service';
import { WishlistService } from '../providers/wishlist-service';
import { SessionService } from '../providers/session-service';
import { RadioAlertService } from '../providers/radioAlert-service';
import { ToastService } from '../providers/toast-service';
import { LikesService } from '../providers/likes-service';
import { HttpModule }    from '@angular/http';
import { ProductDetailPage } from '../pages/product/product-detail';
import { ListItem } from '../pages/list-item/list-item';
import { WishlistsPage } from '../pages/wishlists/wishlists';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { UserPage } from '../pages/user-page/user-page';
import { LikesPage } from '../pages/likes/likes';
import { BrowsePage } from '../pages/browse/browse';
import { FilterCategoryPipe } from '../pages/browse/browse.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductDetailPage,
    ProductsPage,
    ListItem,
    WishlistsPage,
    WishlistPage,
    UserPage,
    LikesPage,
    BrowsePage,
    FilterCategoryPipe,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductDetailPage,
    ProductsPage,
    ListItem,
    WishlistsPage,
    WishlistPage,
    UserPage,
    LikesPage,
    BrowsePage
  ],
  providers: [CatalogService, WishlistService, SessionService, RadioAlertService, ToastService, LikesService]
})

export class AppModule {
}
