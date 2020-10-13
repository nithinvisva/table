import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableOneComponent } from './table-one.component';

const routes: Routes = [{ path: '', component: TableOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableOneRoutingModule { }
