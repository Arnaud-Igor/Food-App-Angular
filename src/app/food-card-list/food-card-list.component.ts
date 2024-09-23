import { Component, inject } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';
import { FoodInterface } from '../food-interface';
import { FoodService } from '../food.service';
import { CommonModule } from '@angular/common';
import { ionSearch } from '@ng-icons/ionicons';
import { provideIcons, NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-food-card-list',
  standalone: true,
  imports: [FoodCardComponent, CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ ionSearch })],
  templateUrl: './food-card-list.component.html',
  styleUrl: './food-card-list.component.css',
})
export class FoodCardListComponent {
  foodCardList: FoodInterface[] = [];
  foodCardFilterList: FoodInterface[] = [];

  foodService: FoodService = inject(FoodService);

  filterResults(inputEntry: string) {
    if (!inputEntry) {
      this.foodCardFilterList = this.foodCardList;
      return;
    }

    this.foodCardFilterList = this.foodCardList.filter((foodCard) =>
      foodCard?.name.toLowerCase().includes(inputEntry.toLowerCase())
    );
  }

  constructor() {
    this.foodService.getAllFoodCards().then((foodCardList: FoodInterface[]) => {
      this.foodCardList = foodCardList;
      this.foodCardFilterList = foodCardList;
    });
  }
}
