import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkParentChildPage } from './talk-parent-child.page';

describe('TalkParentChildPage', () => {
  let component: TalkParentChildPage;
  let fixture: ComponentFixture<TalkParentChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkParentChildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkParentChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
