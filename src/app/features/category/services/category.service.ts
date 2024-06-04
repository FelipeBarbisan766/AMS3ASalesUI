import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient , HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(
      "https://localhost:7148/api/v1/Categories"
    );  
  }
}
