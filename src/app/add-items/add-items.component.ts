import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  addItemForm = new FormGroup(({
    title: new FormControl(),
    author: new FormControl()
  }));

  constructor(
    private cart:CartService,
    private route:ActivatedRoute
  ) { }

  idFromURL = '';
  alertText = '';
  ngOnInit(): void {
    this.idFromURL = this.route.snapshot.params.id;
    if(this.idFromURL != undefined){
      this.cart.getItemFromId(this.idFromURL).subscribe((res)=>{
        // console.log(res);
        this.addItemForm = new FormGroup(({
          title: new FormControl(res['title']),
          author: new FormControl(res['author'])
        }));
      });
    } else {
      console.log("Undefined");
      // this.idFromURL = '';
    }
  }

  alert = false;

  alertDismiss(){
    this.alert = false;
  }

  data;
  addItemsData(){
    this.data = this.addItemForm.value;
    this.cart.sendItemsData(this.data).subscribe((res)=>{
      console.table(res);
      this.alert = true;
      this.alertText = "Added";
      this.addItemForm.reset({});
    });
  }

  updateItems(){
    this.data = this.addItemForm.value;
    // console.log(this.data);
    this.cart.updateItems(this.idFromURL, this.data).subscribe((res)=>{
      console.log(res);
      this.alert = true;
      this.alertText = "Updated";
      // this.addItemForm.reset({});
    });
  }

}
