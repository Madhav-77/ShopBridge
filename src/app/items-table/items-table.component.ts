import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  constructor(private cart: CartService) { }

  listArr;
  ngOnInit(): void {
    this.cart.getItems().subscribe((data)=>{
      console.table(data);
      this.listArr = data;
    });
  }

}
