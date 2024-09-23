import { Component, Input } from '@angular/core';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {ionCartSharp} from '@ng-icons/ionicons';
import { FoodInterface } from '../food-interface';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ionCartSharp})],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  @Input() foodCard!: FoodInterface;
}
