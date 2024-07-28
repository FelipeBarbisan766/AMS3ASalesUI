import { Component } from '@angular/core';
import { AddProductRequest } from '../models/add-product-request.models';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  model: AddProductRequest;
  constructor(private productService:ProductService){
    this.model = {

      Description:'',
      Price:'',
      Stock:'',
      ImageURL:'',
      CategoryId:''

    };
  }
  onFormSubmit(){
    this.productService.addProduct(this.model)
    .subscribe({
      next:(response)=>{
        
      }
    });
  }

}