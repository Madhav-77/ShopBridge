import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Inventory } from './inventory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})

export class CartService {
  url = "http://127.0.0.1:5000";
  // url = 'https://services-flask-api.herokuapp.com';
  constructor(private http: HttpClient) {}

  item: any;
  
  // gets all items from the server
  getItems(): Observable<Inventory[]> {
    this.item = this.http.get<Inventory[]>(this.url + '/items');
    return this.item;
  }

  // gets single item from the server
  getItem(id: number): Observable<any> {
    const url = `${this.url}/item/${id}`;
    return this.http.get<Inventory>(url);
  }

  // adds item to the server
  addItem(item: Inventory, image: any) {
    console.log(image[0]);
    console.log(item);
    const { name, description, price } = item;
    const formData: FormData = new FormData();
    formData.append('description', description);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image[0], image['name']);
    console.table(formData.getAll);
    return this.http.post<Inventory>(this.url + '/add', formData);
  }

  // updates item on the server
  updateItem(item: Inventory, image: any, id: any) {
    const { name, description, price } = item;
    const formData: FormData = new FormData();
    formData.append('id', id);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('price', price);
    // image check
    if (image.length == 1) {
      formData.append('image', image[0], image['name']);
    }
    return this.http.put<Inventory>(this.url + '/update', formData);
  }

  // deletes item from the server
  deleteItem(item: Inventory | number) {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
