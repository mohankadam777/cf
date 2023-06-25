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
      this.isAuthenticated=!!user;
    })
  }
  
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  title = 'cafe';
}
