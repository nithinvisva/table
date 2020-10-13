import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableTwoRoutingModule } from './table-two-routing.module';
import { TableTwoComponent } from './table-two.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [TableTwoComponent],
  imports: [
    CommonModule,
    TableTwoRoutingModule,
    MatTableModule
  ]
})
export class TableTwoModule { }
