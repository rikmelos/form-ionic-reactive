import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbServicesOptionComponent } from './bdb-services-option.component';

describe('BdbServicesOptionComponent', () => {
  let component: BdbServicesOptionComponent;
  let fixture: ComponentFixture<BdbServicesOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdbServicesOptionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbServicesOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
