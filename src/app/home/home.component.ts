import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/categoris.storeItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private categoriesStoreItem: CategoriesStoreItem) {
    this.categoriesStoreItem.loadCategories();
  }
}
