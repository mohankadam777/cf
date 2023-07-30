import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-secure-page',
  templateUrl: './secure-page.component.html',
  styleUrls: ['./secure-page.component.css']
})
export class SecurePageComponent  implements OnInit{

  constructor(
    private userServices:UserService,
    private productServces :ProductService
    ){}
  ngOnInit(): void {
    console.log(">>>> in Onit");
    
    // this.productServces.getProducts().subscribe({
this.userServices.getCat().subscribe({
  next:(response:any)=>{
    console.log("in secure method",response);
    
  }
})

  }
}
