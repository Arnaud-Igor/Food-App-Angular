import { Component } from '@angular/core';
import { FoodCardListComponent } from './food-card-list/food-card-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-app';
}
