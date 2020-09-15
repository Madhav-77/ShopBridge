import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  constructor(private cart: CartService) { }

  listArr:any;
  ngOnInit(): void {
    this.cart.getItems().subscribe((data)=>{
      console.table(data);
      this.listArr = data;
    });
  }

  removeItems(itemId){

    if(confirm("Are you sure to delete?")) {
      this.cart.removeItems(itemId).subscribe((res)=>{
        for (let i = 0; i < this.listArr.length; i++) {
          if(this.listArr[i]['id']==itemId){
            this.listArr.splice(i, 1);
          }
        }
      });
    }
  }

}
