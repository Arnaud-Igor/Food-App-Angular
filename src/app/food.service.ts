import { Injectable } from '@angular/core';
import { FoodInterface } from './food-interface';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foodCardList: FoodInterface[] = [
    {
      id: 1,
      name: 'Poulet Yassa',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 4000,
      imageUrl: '/assets/img2.png',
    },
    {
      id: 2,
      name: 'Steak Crème',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 5750,
      imageUrl: '/assets/img3.png',
    },
    {
      id: 3,
      name: 'Tchep Sénégalais',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 2000,
      imageUrl: '/assets/img4.png',
    },
    {
      id: 4,
      name: 'Salade Poulet',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 5500,
      imageUrl: '/assets/img5.png',
    },
    {
      id: 5,
      name: 'Brochette Mixte',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 4500,
      imageUrl: '/assets/img6.png',
    },
    {
      id: 6,
      name: 'Salade Maïs',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 1500,
      imageUrl: '/assets/img7.png',
    },
    {
      id: 7,
      name: 'Pasta Carbonara',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 1750,
      imageUrl: '/assets/img8.png',
    },
    {
      id: 8,
      name: 'Crudité Mixte',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 1200,
      imageUrl: '/assets/img9.png',
    },
    {
      id: 9,
      name: 'Nouiilles Chinoises',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas neque impedit, repellendus voluptatem tempore eos illum reiciendis doloremque.',
      price: 1000,
      imageUrl: '/assets/img10.png',
    },
  ];

  async getAllFoodCards(): Promise<FoodInterface[]> {
    return this.foodCardList;
  }

  constructor() {}
}
