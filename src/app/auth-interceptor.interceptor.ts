import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private userService :UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
  //  if(request.url.includes("login")||request.url.includes("signup")||request.url.includes("signup")){
return next.handle(request);
    
  //  }else{
  //   return this.userService.user.pipe(
  //     take(1),
  //     exhaustMap(user=>{

  // const modifiedRequest = request.clone({headers:new HttpHeaders({'Authorization':`${user.token}`})})
  // return next.handle(modifiedRequest);

  //     })
  //   )
  //  }
  }
}
