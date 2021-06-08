import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  // newAccount(account:any)
  // {
  //   let httpHeaders = new HttpHeaders({
  //     "content-Type" : "application/json"
  //   });
  // return this.http.post<any>("http://localhost:5000/addaccount",account,{headers:httpHeaders});
  // }

  newAccount(account:any)
  {
  return this.http.post("http://localhost:5000/account/addaccount",{'data':account}).subscribe(data=>{
    console.log(data)
  })
  }
  
  searchAccount(username_or_email:any)
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    alert("accountservices");
    return this.http.get<any>("http://localhost:5000/account/searchaccount/"+username_or_email,{headers:httpHeaders});
    
  } 

}
