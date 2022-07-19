import { Component, OnInit } from '@angular/core';
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { ModalComponent } from '../loginmodal/modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shoppingcart=faShoppingCart;

  constructor() { }
  ngOnInit(): void {
  }

}
