import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userServices :  UserService,
    private router : Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     let permit = this.userServices.checkToken().subscribe({
//       next:(res:any)=>{
//         console.log(res);
        
// return false;
//       },
//       error:(err:any)=>{
//         console.log(err);
        
// this.router.navigate(['/unsecure'])
// return false;
//       }
//     });
    // console.log("auth guard: >> ",permit);
    // console.log(per);
    
    return false;
  }
  
}
