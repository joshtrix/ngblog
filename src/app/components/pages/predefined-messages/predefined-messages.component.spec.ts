import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedMessagesComponent } from './predefined-messages.component';

describe('PredefinedMessagesComponent', () => {
  let component: PredefinedMessagesComponent;
  let fixture: ComponentFixture<PredefinedMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
