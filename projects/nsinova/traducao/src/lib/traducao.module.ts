import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraducaoPipe } from './t.pipe';

@NgModule({
  declarations: [
    TraducaoPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TraducaoPipe,
  ]
})
export class TraducaoModule { }
