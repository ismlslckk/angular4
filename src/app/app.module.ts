import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule, Response} from "@angular/http";


import {SimpleNotificationsModule,NotificationsService} from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CartService} from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    {provide:"apiUrl",useValue:"http://northwindapi.azurewebsites.net/api"},
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
bootstrap:bu modülün başlangıç yani ana componentini belirtir.
  export diyerek bu classın public oldugunu belirtiyoruz.*/
