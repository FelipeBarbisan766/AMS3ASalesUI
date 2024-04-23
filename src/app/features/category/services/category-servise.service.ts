import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiseService {

  constructor(private http : HttpClient) { }
  getCategory(){
    this.http.get("https://localhost:7148/api/v1/Categories")
  }
}
