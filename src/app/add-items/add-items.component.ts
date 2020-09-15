import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  addItemForm = new FormGroup(({
    title: new FormControl('Temp'),
    author: new FormControl('Temp2')
  }));

  constructor() { }

  ngOnInit(): void {
  }

  getItemsData(){
    console.log(this.addItemForm.value);
  }

}
