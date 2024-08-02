import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categoris.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { SearchKeyword } from './types/searchKeyword.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProduct();
  }

  onSelectCategory(categoryId: number): void {
    this.productsStoreItem.loadProduct('maincategoryid=' + categoryId);
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productsStoreItem.loadProduct(
      'maincategoryid=' +
        searchKeyword.categoryId +
        '&keywords=' +
        searchKeyword.keyword
    );
  }
}
