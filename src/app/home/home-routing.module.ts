import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsGalleryComponent,
      },
      {
        path: 'product/:id',
        component: ProductdetailsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
