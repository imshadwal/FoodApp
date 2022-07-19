import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../Shared/Models/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
searchquery="";
  constructor(public fs:FoodService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      this.searchquery=params['searchItem']|| "";
      if(params['searchItem'])
      this.foods= this.fs.getAll().filter(food =>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.foods=this.fs.getAll();
    })
    
  }

}
