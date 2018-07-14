import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {NotificationsService} from 'angular2-notifications'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct:string;

  constructor(private productService: ProductService,
    private notificationsService:NotificationsService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(p => {this.products = p});
  }

  addToCart(product:Product){
    this.addedProduct=product.productName;
    this.notificationsService.success("Successfull",product.productName+" added to cart!");
  }

}
