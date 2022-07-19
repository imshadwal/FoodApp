import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[];
  cartItemsCount:any={};

  constructor(public fs:FoodService) { }

  ngOnInit(): void {
    this.fs.cartItemList.subscribe((data:any)=>{
      this.cartItemsCount=data
      this.cartItems=Object.keys(data).map(id=>this.fs.getfoodbyid(+id))
    })
  }

}
