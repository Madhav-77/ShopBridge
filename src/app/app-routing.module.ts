import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { UpdateItemDetailsComponent } from './update-item-details/update-item-details.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'add',
    component: AddItemsComponent
  },
  {
    path: 'items',
    component: ItemsTableComponent
  },
  {
    path: 'edit/:id',
    component: UpdateItemDetailsComponent
  },
  {
    path: 'item/:id',
    component: ViewItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
