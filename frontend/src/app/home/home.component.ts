import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { timeStamp } from 'console';
import { AccountService } from '../account.service';
import { AccountModel } from './account.model';


let date = new Date();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  // accountItem = new AccountModel("","surname","email@domain.com","username","male","password",123456789,date);
  accountItem = {
    firstname:'',
    surname : '',
    email : '',
    username :'' ,
    password : '',
    phone : '',
    gender : '',
    dob :'' , 

  }

  addAccount(){
    this.accountService.newAccount(this.accountItem);
    alert("Sucess");
  }
  
  // private _accntObj: any;
  // public get accntObj(): any {
  //   return this._accntObj;
  // }
  // public set accntObj(value: any) {
  //   this._accntObj = value;
  // }

  // addAccount()
  // {
  //   this.accountService.newAccount(this.accountItem)
  //   .subscribe(data => {
  //     this.accntObj = data;
  //     alert(this.accntObj);
  //   });
    
  //   var email = this.accountItem.email;
  //   alert("Account data passed from front end : "+email);
  //   // this.router.navigate(["/signin"]);
  // }

}
