import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-libzinha',
  template: `
  <button (click)="soma(10, 20)">Soma: 10 + 20</button>
    <p>
      libzinha works!
    </p>
  `,
  styles: ``
})
export class LibzinhaComponent {
  constructor(
    private readonly dialog: MatDialog,
  ) { }

  soma(n1, n2) {
    alert(n1 + n2)
    // return n1 + n2;
  }
}
