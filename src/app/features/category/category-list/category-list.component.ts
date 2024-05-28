import { Component, OnInit } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { RouterModule } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AddCategoryComponent,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  categories?: Category[]

  constructor(private categoriService: CategoryService){}

  ngOnInit(): void{
    this.categoriService.getAllCategories().subscribe({
      next:(reponse) => {
        this.categories = reponse;
      }
    });
  }

}
