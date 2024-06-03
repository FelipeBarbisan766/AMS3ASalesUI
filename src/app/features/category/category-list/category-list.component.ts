import { Component, OnInit } from '@angular/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AddCategoryComponent,RouterLink,RouterModule,CommonModule],
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
