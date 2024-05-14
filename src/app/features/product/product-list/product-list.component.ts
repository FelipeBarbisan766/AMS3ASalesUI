import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,AddProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
