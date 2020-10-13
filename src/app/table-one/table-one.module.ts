import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableOneRoutingModule } from './table-one-routing.module';
import { TableOneComponent } from './table-one.component';
import {  MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [TableOneComponent],
  imports: [
    CommonModule,
    TableOneRoutingModule,
    MatTableModule
  ]
})
export class TableOneModule { }
