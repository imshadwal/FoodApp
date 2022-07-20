import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import{faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search1= faSearch;
  searchItem: string='';
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem=params['seachItem']
    })
  }
  search(): void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)

  }

}
