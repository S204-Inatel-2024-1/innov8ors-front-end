import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermScreenComponent } from './interm-screen.component';

describe('IntermScreenComponent', () => {
  let component: IntermScreenComponent;
  let fixture: ComponentFixture<IntermScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntermScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntermScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
