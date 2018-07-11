import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get("http://northwindapi.azurewebsites.net/api/products")
      .map(response => response.json());
  }
}
