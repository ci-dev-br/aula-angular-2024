import { ComponentRef, Directive, ElementRef, OnDestroy, OnInit, Optional } from '@angular/core';
import { PintarDeBlueDirective } from './pintar-de-blue.directive';
import { ItemTarefaComponent } from './tarefas/item-tarefa/item-tarefa.component';

@Directive({
  selector: 'nx-item-tarefa'
})
export class PintarDeRedDirective implements OnInit {
  constructor(
    //  private el: ElementRef<HTMLElement>,
    private comp: ItemTarefaComponent,
  ) {
    console.log('red', comp)
    // el.nativeElement.style.background = 'red';

  }

  ngOnInit(): void {
  }

}
