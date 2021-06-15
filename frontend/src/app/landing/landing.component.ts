import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }
  // for searching
  searchItem = {
    searchkey:''
  }

  result:any

  search(){
    this.accountService.searchAccount(this.searchItem.searchkey).subscribe(data =>{
      this.result = data;
      if (this.result==null){
        alert("No such user exist");
      }else{
        alert("user exist");
      }
    });
  }
  

}
