import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

export const routes: Routes = [
    {
        path: 'category',
        component: CategoryListComponent,
    },
    {
        path: 'add-category',
        component: AddCategoryComponent,
    }
];
