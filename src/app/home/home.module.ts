import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categoris.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';
import { RouterModule } from '@angular/router';
import { HomeRouteModule } from './home-routing.module';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
    ProductsGalleryComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    HomeRouteModule,
  ],
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsStoreItem,
    ProductsService,
  ],
})
export class HomeModule {}
