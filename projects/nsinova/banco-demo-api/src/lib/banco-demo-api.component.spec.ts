import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDemoApiComponent } from './banco-demo-api.component';

describe('BancoDemoApiComponent', () => {
  let component: BancoDemoApiComponent;
  let fixture: ComponentFixture<BancoDemoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BancoDemoApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BancoDemoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
