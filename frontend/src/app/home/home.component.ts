import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


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
  // For user Registration
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
  // For user Loggin
  loginItem = {
    username_or_email:'',
    password:''
  }

  // Regular Expression
  emailreg = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  passreg  = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  phonereg = "^[7-9][0-9]{9}$"


  addAccount(){
    this.accountService.newAccount(this.accountItem);
    alert("Sucess");
  }
  


  acntobj:any;

  search(){
    this.accountService.searchAccount(this.loginItem.username_or_email).subscribe(data => {
      this.acntobj = data;
      if(this.acntobj!=null){
        return true;
        // this.router.navigate(["landing"])
      }else{
        return false;
        // alert("No such account");
      }
    })
    alert('homecomponent.ts')
  }

  signup(){

  }

  login(){
    this.accountService.searchAccount(this.loginItem.username_or_email).subscribe(data => {
      this.acntobj = data;
      if(this.acntobj!=null){
        if(this.acntobj.password==this.loginItem.password){
          alert("Succesfull login");
          this.router.navigate(["welcome"])
        }else{
          alert('Invalid Credentials')
        }
      }else{
        alert("No such account");
      }
    })
  }
}
