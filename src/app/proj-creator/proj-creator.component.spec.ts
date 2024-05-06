import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCreatorComponent } from './proj-creator.component';

describe('ProjCreatorComponent', () => {
  let component: ProjCreatorComponent;
  let fixture: ComponentFixture<ProjCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
