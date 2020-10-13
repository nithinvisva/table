import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableTwoComponent } from './table-two.component';

const routes: Routes = [{ path: '', component: TableTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableTwoRoutingModule { }
