import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  private userSub: Subscription= new Subscription();
  constructor(private userSevice:UserService){}
  isAuthenticated:boolean=false;
  ngOnInit(): void {
    this.userSub=this.userSevice.user.subscribe((user)=>{
      if(user.token){
        this.isAuthenticated=!!user;
        console.log("in if statement");
        
      }else{
        console.log("in else statement",user);


        this.isAuthenticated=false
      }
      // this.isAuthenticated=(user.token)?true:false
    })
  }
  
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  logout(){
    this.userSevice.logout();
  }
  title = 'cafe';
}
