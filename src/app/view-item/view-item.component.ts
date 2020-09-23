import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  item: Inventory;
  base_url: String;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private navigateViaRouter: Router
  ) {}

  ngOnInit(): void {
    this.base_url = this.cartService.url;
    this.getItem();
  }

  // takes id from url and request
  // to get item with that id to api
  getItem(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.cartService.getItem(id).subscribe(item => this.item = item);
  }

  // route to edit component
  navigateToEdit(id:number){
    this.navigateViaRouter.navigateByUrl('/edit/'+id);
  }
}
