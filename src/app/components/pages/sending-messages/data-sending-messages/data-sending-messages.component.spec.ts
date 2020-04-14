import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSendingMessagesComponent } from './data-sending-messages.component';

describe('DataSendingMessagesComponent', () => {
  let component: DataSendingMessagesComponent;
  let fixture: ComponentFixture<DataSendingMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSendingMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSendingMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
