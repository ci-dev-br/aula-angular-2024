import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTarefaComponent } from './item-tarefa.component';

describe('ItemTarefaComponent', () => {
  let component: ItemTarefaComponent;
  let fixture: ComponentFixture<ItemTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
