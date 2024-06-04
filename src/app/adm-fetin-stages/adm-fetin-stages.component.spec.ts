import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFetinStagesComponent } from './adm-fetin-stages.component';

describe('AdmFetinStagesComponent', () => {
  let component: AdmFetinStagesComponent;
  let fixture: ComponentFixture<AdmFetinStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmFetinStagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmFetinStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
