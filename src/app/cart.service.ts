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

  sendItemsData(data){
    return this.http.post(this.url, data);
  }

  removeItems(itemId){
    return this.http.delete(`${this.url}/${itemId}`)
  }

  getItemFromId(id){
    return this.http.get(`${this.url}/${id}`);
  }

  updateItems(id, data){
    return this.http.put(`${this.url}/${id}`, data);
  }
}
