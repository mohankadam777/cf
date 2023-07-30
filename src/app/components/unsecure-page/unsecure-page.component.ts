import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-unsecure-page',
  templateUrl: './unsecure-page.component.html',
  styleUrls: ['./unsecure-page.component.css']
})
export class UnsecurePageComponent implements OnInit{
  constructor(
    private userServices:UserService,
    ){}

    ngOnInit(): void {
  this.userServices.user.subscribe({
    next:(res:any)=>{
      console.log("in unsecure",res);
      
    }
  })
}

}
