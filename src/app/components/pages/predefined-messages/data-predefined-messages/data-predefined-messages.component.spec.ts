import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPredefinedMessagesComponent } from './data-predefined-messages.component';

describe('DataPredefinedMessagesComponent', () => {
  let component: DataPredefinedMessagesComponent;
  let fixture: ComponentFixture<DataPredefinedMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPredefinedMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPredefinedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
