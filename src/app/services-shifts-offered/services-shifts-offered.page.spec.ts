import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesShiftsOfferedPage } from './services-shifts-offered.page';

describe('ServicesShiftsOfferedPage', () => {
  let component: ServicesShiftsOfferedPage;
  let fixture: ComponentFixture<ServicesShiftsOfferedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesShiftsOfferedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesShiftsOfferedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
