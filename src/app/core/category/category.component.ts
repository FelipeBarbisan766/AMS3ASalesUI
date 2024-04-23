import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryListComponent } from '../../features/category/category-list/category-list.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NavbarComponent,CategoryListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
