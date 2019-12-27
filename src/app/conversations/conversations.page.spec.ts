import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsPage } from './conversations.page';

describe('ConversationsPage', () => {
  let component: ConversationsPage;
  let fixture: ComponentFixture<ConversationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
