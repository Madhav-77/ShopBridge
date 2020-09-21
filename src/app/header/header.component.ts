import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  title:String;
  ngOnInit(): void {
    // getting title from root component
    this.title = this.appComponent.title;
  }

  activeTab = 'add-items';

  // function made to toggle navbar active 
  // class between tabs in case of multiple tabs 
  toggleTab(activeTab){
    this.activeTab = activeTab;
  }
}
