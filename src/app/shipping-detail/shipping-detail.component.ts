import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ShippingDetail } from './shipping-detail';
@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit {

  constructor() { }

  cities=[];
  model:ShippingDetail=new ShippingDetail('','',true,-1);

  ngOnInit() {
    this.cities.push(
      {
        "id":"1","name":"Ankara"
      },
      {
        "id":"2","name":"İstanbul"
      },
      {
        "id":"3","name":"London"
      },
    );
  }

  checkout(form:NgForm){

  }

}
