import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
constructor(private userService : UserService,private router:Router){}
  ngOnInit(): void {
    console.log("hello");
  }
  handleLogin(value:any){
this.userService.login(value).subscribe({
  next:(res:any)=>{
    let token:string=res;
    localStorage.setItem("token",token.substring(10,token.length-2))
    console.log("in login method");
    this.router.navigate(['/secure'])
  },
  error:(err:any)=>{
console.log("inerror method");
console.error(err);
  }
})
  }

}
