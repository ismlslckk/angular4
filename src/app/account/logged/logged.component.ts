import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from 'src/app/account/account.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements DoCheck {

  isLogged:boolean=false;
  constructor(private accountService: AccountService,
    private router: Router) { }

  ngDoCheck(): void {
    this.isLogged=this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
    this.router.navigate(["account"]);
  }

}
