import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {AccountService} from './account.service'
import {Router,ActivatedRoute} from '@angular/router'
import { NotificationsService } from '../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  returnUrl:string;
  message:string;

  constructor(private accountService:AccountService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private notificationsService:NotificationsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.returnUrl=params["returnUrl"] || "products";
    })
  }

  loginUser(form:NgForm){
    this.accountService.login(form.value.user,form.value.password).subscribe(t=>{
        if(t){
            this.router.navigateByUrl(this.returnUrl);
        }else{
          this.notificationsService.error("Error","Username or Password is incorrect");

        }
      }
  );
  }

}
