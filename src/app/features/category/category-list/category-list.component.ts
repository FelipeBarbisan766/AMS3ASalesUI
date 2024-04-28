import { Component } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AddCategoryComponent,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

}
