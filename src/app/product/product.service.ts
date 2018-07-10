import { Injectable } from '@angular/core';
import {ProductList} from "./product-list.mock";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return ProductList;
  }
}
