import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from '../inventory';
import { NgProgress } from 'ngx-progressbar';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  items: Inventory[] = [];
  base_url: String;

	constructor(
    private route: ActivatedRoute, 
    private cartService: CartService,
    public ngProgress: NgProgress,
    private spinner: NgxSpinnerService
    ) { }

	ngOnInit() {
    // this.ngProgress.done();
    this.base_url = this.cartService.url;
		this.getItems();
	}

  // fetch all items from service class
	getItems(): void {
    this.spinner.show();
    this.cartService.getItems().subscribe((items) => {
      if(items && items.length > 0){
        this.items = items;
      } else {
        this.items = [];
      }
      this.spinner.hide();
    });
  }

  // passing item to service class for delete request
	delete(item: Inventory): void {
    if(confirm("Are you sure to delete this item?")) {
      this.cartService.deleteItem(item).subscribe(success=> {this.getItems();});
    }
	}
}
