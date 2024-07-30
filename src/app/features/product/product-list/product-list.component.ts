import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products?: Product[]

  constructor(private ProductService: ProductService){}

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe({
      next: (reponse) => {
        this.products = reponse;
      }
    }
    );
  }
}
