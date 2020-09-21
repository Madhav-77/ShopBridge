import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { UpdateItemDetailsComponent } from './update-item-details/update-item-details.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    ItemsTableComponent,
    UpdateItemDetailsComponent,
    ViewItemComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
