import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponent } from './padre.component';

describe('PadreComponent', () => {
  let component: PadreComponent;
  let fixture: ComponentFixture<PadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
