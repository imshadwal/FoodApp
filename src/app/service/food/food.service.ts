import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Foods } from 'src/app/Shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foods=[
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
      id:2,
      price: 399,
      name:'Burger',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food1.jpg',
    },
    {
      id:3,
      price: 399,
      name:'Sandwich',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food2.jpg',
    },
    {
      id:4,
      price: 399,
      name:'Bread/Butter',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food3.jpg',
    },
    {
      id:5,
      price: 399,
      name:'Momos',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food4.jpg',
    },
    {
      id:6,
      price: 399,
      name:'Samose',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food5.jpg',
    },
    {
      id:7,
      price: 399,
      name:'Spring Roll',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food6.jpg',
    },
    {
      id:8,
      price: 399,
      name:'Noodles',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food7.jpg',
    },
    {
      id:9,
      price: 399,
      name:'Omelette',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food8.jpg',
    },
    {
      id:10,
      price: 399,
      name:'Fried Rice',
      favourite:false,
      star:4.5,
      tags:['Fastfood','Pizza','Lunch'],
      imageUrl:'/assets/food9.jpg',
    },
  
  ];
  public cartItemList: any=new BehaviorSubject<any>({});
  public productList= new BehaviorSubject<any>([]);

  constructor() { }
  
addtocart(foodid : number,quantity: number=1)
{
const cartItems=this.cartItemList.value;
if(cartItems[foodid])
  {
    cartItems[foodid]+=quantity;
  }
else
{
  cartItems[foodid]=quantity;
}
this.cartItemList.next(cartItems)
}

removefromCart(foodid : number)
{
  const cartItems=this.cartItemList.value;
  delete cartItems[foodid]
  alert("Are you Sure You want to Delete?")
  this.cartItemList.next(cartItems)
}

getfoodbyid(foodid : number)
{
  return this.foods.find(food=>food.id===foodid)
}

getAll():Foods[]{
  return this.foods;
}
}
