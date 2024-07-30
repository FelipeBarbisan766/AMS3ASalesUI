import { Component, OnInit } from '@angular/core';
import { AddProductRequest } from '../models/add-product-request.models';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/category';
import { AddCategoryComponent } from '../../category/add-category/add-category.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,AddCategoryComponent, RouterLink, RouterModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})

export class AddProductComponent implements OnInit {

  model: AddProductRequest;
  constructor(private productService:ProductService,private categoryService: CategoryService){
    this.model = {

      Description:'',
      Price:'',
      Stock:'',
      ImageURL:'',
      CategoryId:''

    };
  }
  categories?: Category[]



  ngOnInit(): void {
    this.categoryService.getAllCategories()

      .subscribe({
        next: (reponse) => {
          this.categories = reponse;
        }
      });
  }
  onFormSubmit(){
    this.productService.addProduct(this.model)
    .subscribe({
      next:(response)=>{
        
      }
    });
  }

}