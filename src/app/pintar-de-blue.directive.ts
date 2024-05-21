import { Directive, ElementRef, Input, Optional } from '@angular/core';
import { PintarDeRedDirective } from './pintar-de-red.directive';

@Directive({
  selector: '[nxPintarDeBlue]'
})
export class PintarDeBlueDirective {
  @Input()
  nxPintarDeBlue?: string;

  constructor(
  ) { }

}
