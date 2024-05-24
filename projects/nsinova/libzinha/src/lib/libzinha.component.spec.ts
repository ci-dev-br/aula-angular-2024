import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibzinhaComponent } from './libzinha.component';

describe('LibzinhaComponent', () => {
  let component: LibzinhaComponent;
  let fixture: ComponentFixture<LibzinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibzinhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibzinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
