import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscriber, Subscription, exhaustMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  constructor(
    private http :HttpClient,
    private userServices:UserService,
    ) { }
  ngOnInit(): void {

  }
 url = "http://localhost:8081/products";

  getProducts():any{
      return this.http.get(`${this.url}/get`,{responseType:'text' as 'json'});
  }
}
