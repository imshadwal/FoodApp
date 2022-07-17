import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getAll():Foods[]{
  return[
    {
      id:1,
      price: 399,
      name:'Pizza',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Burger',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food1.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Sandwich',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food2.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Bread/Butter',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food3.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Momos',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food4.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Samose',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food5.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Spring Roll',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food6.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Noodles',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food7.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Omelette',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food8.jpg',
    },
    {
      id:1,
      price: 399,
      name:'Fried Rice',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food9.jpg',
    },
  
  ];
}
}
