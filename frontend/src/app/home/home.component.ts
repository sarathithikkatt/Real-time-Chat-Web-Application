import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  loginItem = {
    username_or_email:'',
    password:''
  }

  addAccount(){
    this.accountService.newAccount(this.accountItem);
    alert("Sucess");
  }
  
  acntobj:any;

  search(){
    this.accountService.searchAccount(this.loginItem.username_or_email).subscribe(data => {
      this.acntobj = data;
      if(this.acntobj!=null){
        alert("Succesfull login");
      }else{
        alert("No such account");
      }
    })
    alert('homecomponent.ts')
  }
}
