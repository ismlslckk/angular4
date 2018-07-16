import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service'
import { CartItem } from 'src/app/cart/cart-item'

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }

  constructor(private cartService: CartService) { }

  totalCartItem: number;
  totalCartItemPrice: number;
  cartItems:CartItem[];

  ngOnInit() {
    this.cartItems=this.cartService.list();
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }

}
