import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

export const routes: Routes = [
    {
        path: 'category',
        component: CategoryListComponent,
    },
    {
        path: 'add-category',
        component: AddCategoryComponent,
    },
    {
        path: 'product',
        component: ProductListComponent,
    },
    {
        path: 'add-product',
        component: AddProductComponent,
    }
];
