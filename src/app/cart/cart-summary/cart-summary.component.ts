import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/cart/cart.service'
import {CartItem} from 'src/app/cart/cart-item'

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService:CartService) { }

  totalCartItem:number;
  totalCartItemPrice:number;

  ngOnInit() {
  }

}
