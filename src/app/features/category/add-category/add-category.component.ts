import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models.';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model: AddCategoryRequest;
  constructor(){
    this.model = {

      description:''
    };
  }
  onFormSubmit(){
    console.log(this.model);
  }
}
