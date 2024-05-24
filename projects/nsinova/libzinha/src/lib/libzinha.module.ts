import { NgModule } from '@angular/core';
import { LibzinhaComponent } from './libzinha.component';
import { LibzinhaService } from './libzinha.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LibzinhaComponent
  ],
  imports: [
    MatDialogModule,
  ],
  exports: [
    LibzinhaComponent
  ],
  providers: [
    LibzinhaService
  ]
})
export class LibzinhaModule { }
