import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { UpdateItemDetailsComponent } from './update-item-details/update-item-details.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inventory',
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
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
