import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './core/category/category.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,CategoryComponent,AddCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AMS3ASalesUI';
}
