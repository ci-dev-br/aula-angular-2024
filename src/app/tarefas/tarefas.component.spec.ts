import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarefasComponent } from './tarefas.component';

describe('TarefasComponent', () => {
  let component: TarefasComponent;
  let fixture: ComponentFixture<TarefasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
