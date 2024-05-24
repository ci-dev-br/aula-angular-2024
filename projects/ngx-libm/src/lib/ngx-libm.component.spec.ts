import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibmComponent } from './ngx-libm.component';

describe('NgxLibmComponent', () => {
  let component: NgxLibmComponent;
  let fixture: ComponentFixture<NgxLibmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLibmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxLibmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
