import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { AgGridAngular } from 'ag-grid-angular';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    AgGridAngular
  ]
})
export class GridModule { }
