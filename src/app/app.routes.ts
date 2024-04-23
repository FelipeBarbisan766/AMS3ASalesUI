import { Routes } from '@angular/router';
import { CategoryComponent } from './core/category/category.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';

export const routes: Routes = [
    {path: 'category',component: CategoryListComponent},
    {path: 'admin/category/add',component: AddCategoryComponent}
];
