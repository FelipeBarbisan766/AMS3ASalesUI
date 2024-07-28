import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddProductRequest } from '../models/add-product-request.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      "https://localhost:7148/api/v1/Product"
    );
  }
  addProduct(productRequest:AddProductRequest): Observable<AddProductRequest>
  {
    return this.http.post<AddProductRequest>('https://localhost:7148/api/v1/Product',productRequest);
  }
}
