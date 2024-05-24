import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGabrielApiComponent } from './lib-gabriel-api.component';

describe('LibGabrielApiComponent', () => {
  let component: LibGabrielApiComponent;
  let fixture: ComponentFixture<LibGabrielApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibGabrielApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibGabrielApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
