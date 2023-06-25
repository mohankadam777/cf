import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, tap } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({

  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  user = new Subject<User>();
  url="http://localhost:8081";
  
  signup(data:any):any{
    return this.http.post(this.url+"/user/signup",data,{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"})
  }
  login(data:any):any{
    return this.http.post<User>(this.url+"/user/login",data,{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"})
    .pipe(tap(resData=>{
      let date = (new Date(new Date().getTime()+10*60000));
      let userz= new User(resData.token,"sample",date);
      this.user.next(userz);
      // return userz;
    }))
  }
  checkToken():any{
    return this.http.get(this.url+"/user/checkToken",{headers:new HttpHeaders({"Content-Type":"text/plain ; charset=utf-8"}),responseType:"text"});
  }
  checkTokens():any{
    let header=new HttpHeaders({"Content-Type":"application/json"});
    let tokenz = localStorage.getItem("token");
    let token:string= (tokenz==null)?(""):(tokenz);
    header= header.set("Authorization",token)
    return this.http.get(this.url+"/user/checkToken",{headers:header,responseType:"text" as "json" })
  }
  changePassword(data :any):any{
return this.http.post(this.url+"/user/changePassword",{headers:new HttpHeaders({"Content-Type":"application/json"}),responseType:"text" as "json"})
  }
}
