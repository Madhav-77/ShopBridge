import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = "http://localhost:3000/posts";
  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get(this.url);
  }
}
