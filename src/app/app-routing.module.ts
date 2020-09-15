import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemsComponent } from './add-items/add-items.component';
import { ItemsTableComponent } from './items-table/items-table.component';

const routes: Routes = [
  {
    path: 'add-item',
    component: AddItemsComponent
  },
  {
    path: 'items-table',
    component: ItemsTableComponent
  },
  {
    path: 'update/:id',
    component: AddItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
